const express = require('express')
const app = express()
const http = express()
const fs = require('fs')
const db = require('mongoose')
const config = require('./../config')
const configModel = require('./models/config.model').Model
const bodyParser = require('body-parser')
const morgan = require('morgan')
const pass = require('passport')
const LocalStrategy = require('passport-local').Strategy
const session = require('express-session')
const helmet = require('helmet')
const https = require('https')
const hashPassword = require('./helper/HashPw')
require('dotenv').config();

app.use(bodyParser.urlencoded({ extended: true })) // For Formdata
app.use(bodyParser.json()) // For JSON
app.use(morgan('dev'))
app.use(helmet())
app.use(session({ secret: config.server.SessionSeed, resave: false, saveUninitialized: false }))
app.use(pass.initialize())
app.use(pass.session());
app.enable('trust proxy')

// Https
const sslkey = fs.readFileSync('ssl-key.pem')
const sslcert = fs.readFileSync('ssl-cert.pem')

const options = {
      key: sslkey,
      cert: sslcert
};

// DB
db.connect(`mongodb://${config.server.DBUser}:${config.server.DBPW}@${config.server.DBUrl}:${config.server.DBPort}/${config.server.DBTable}`, {useNewUrlParser: true})

// Login 
pass.use(new LocalStrategy(
    (username, password, done) => {
        console.log('Password ', password)
        configModel.findOne({Key: 'Username'}).then((data)=>{
            console.log('User', data.Value)
            if(data.Value === username){
                return configModel.findOne({Key: 'Password'})
            }
            throw 'Wrong Username'
        }).then((data)=>{
            console.log('Password', data.Value)
            if(data.Value === hashPassword(password)){
                done(null, {id: 123123})
            }
            throw 'Wrong Password'
        }).catch(err => {
            console.log('Error', err)
            done(null, false, {message: err})
        })
        return;
    }
));

  
pass.serializeUser(function(user, cb) {
    console.log('Serial')
    cb(null, user.id);
  })
  
pass.deserializeUser(function(id, cb) {
    console.log('Deserial')
    cb(null, {id: id});
});

// Static Ressourses
app.use('/', express.static('../vue-ui/dist'))
app.use('/assets', express.static('./public'))
app.use('/apidoc', express.static('./apidoc'))


// Routers
const sconfig = express.Router()
require('./routers/config.router')(sconfig)
app.use('/config', sconfig)

const image = express.Router()
require('./routers/image.router')(image)
app.use('/image', image)

const topic = express.Router()
require('./routers/topic.router')(topic)
app.use('/topic', topic)

const adminArea = express.Router()
require('./routers/adminArea.router')(adminArea)
app.use('/aa', adminArea)

const instagram = express.Router()
require('./routers/instagram.router')(instagram)
app.use('/insta', instagram)


/**
 * @api {get} / HTTPS Redirect
 * @apiGroup General
 * @apiSuccess Redirect Redirect to the HTTPS Port
 */
http.get('/',  (req, res) => { res.redirect(`https://${config.server.host}:${config.server.port}`)})

http.listen(config.server.httpport)
https.createServer(options, app).listen( config.server.port, () => { console.log(`Server is running on https://${config.server.host}:${config.server.port}`)})

module.exports = app