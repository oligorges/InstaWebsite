const express = require('express')
const app = express()
const http = express()
const fs = require('fs')
const db = require('mongoose')
const config = require('../config')
const configModel = require('./models/configModel').Model
const bodyParser = require('body-parser')
const morgan = require('morgan')
const pass = require('passport')
const LocalStrategy = require('passport-local').Strategy;
const session = require('express-session')
const helmet = require('helmet')
const https = require('https')
const hashPassword = require('./middelware/HashPw')
require('dotenv').config();

app.use(bodyParser.urlencoded({ extended: true })) // For Formdata
app.use(bodyParser.json()) // For JSON
app.use(morgan('dev'))
app.use(helmet())
app.use(session({ secret: process.env.SessionSeed, resave: false, saveUninitialized: false }))
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


app.use('/', express.static('../vue-ui/dist'))
app.use('/assets', express.static('./public'))
app.use('/apidoc', express.static('./apidoc'))

// Endpoint for testdata
app.delete('/database', function(req, res){
    cImage.model.collection.drop();
    cTopic.model.collection.drop()
    res.send()
})
// Endpoint for testdata
app.patch('/database', function(req, res){
    const data  = [
        { Link: 'Cat1', Thumb:'https://www.catster.com/wp-content/uploads/2017/08/A-fluffy-cat-looking-funny-surprised-or-concerned.jpg', link: 'https://www.catster.com/wp-content/uploads/2017/08/A-fluffy-cat-looking-funny-surprised-or-concerned.jpg', Name: 'Cat1', Igid:'123asd12', Topic: 'dog', Displayed: true },
        { Link: 'Cat2', Thumb:'https://www.catster.com/wp-content/uploads/2017/08/A-fluffy-cat-looking-funny-surprised-or-concerned.jpg', link: 'https://www.catster.com/wp-content/uploads/2017/08/A-fluffy-cat-looking-funny-surprised-or-concerned.jpg', Name: 'Cat2', Igid:'123asd12',Topic: 'gen', Displayed: false },
        { Link: 'Cat3', Thumb:'https://www.catster.com/wp-content/uploads/2017/08/A-fluffy-cat-looking-funny-surprised-or-concerned.jpg', link: 'https://www.catster.com/wp-content/uploads/2017/08/A-fluffy-cat-looking-funny-surprised-or-concerned.jpg', Name: 'Cat3', Igid:'123asd12', Topic: 'cat', Displayed: false },
        { Link: 'Cat4', Thumb:'https://www.catster.com/wp-content/uploads/2017/08/A-fluffy-cat-looking-funny-surprised-or-concerned.jpg', link: 'https://www.catster.com/wp-content/uploads/2017/08/A-fluffy-cat-looking-funny-surprised-or-concerned.jpg', Name: 'Cat4', Igid:'123asd12', Topic: 'dog', Displayed: false },
        { Link: 'Cat5', Thumb:'https://www.catster.com/wp-content/uploads/2017/08/A-fluffy-cat-looking-funny-surprised-or-concerned.jpg', link: 'https://www.catster.com/wp-content/uploads/2017/08/A-fluffy-cat-looking-funny-surprised-or-concerned.jpg', Name: 'Cat5', Igid:'123asd12', Topic: 'cat', Displayed: true },
        { Link: 'Cat6', Thumb:'https://www.catster.com/wp-content/uploads/2017/08/A-fluffy-cat-looking-funny-surprised-or-concerned.jpg', link: 'https://www.catster.com/wp-content/uploads/2017/08/A-fluffy-cat-looking-funny-surprised-or-concerned.jpg', Name: 'Cat6', Igid:'123asd12', Topic: 'dog', Displayed: false },
        { Link: 'Cat7', Thumb:'https://www.catster.com/wp-content/uploads/2017/08/A-fluffy-cat-looking-funny-surprised-or-concerned.jpg', link: 'https://www.catster.com/wp-content/uploads/2017/08/A-fluffy-cat-looking-funny-surprised-or-concerned.jpg', Name: 'Cat7', Igid:'123asd12', Topic: 'cat', Displayed: true },
    ]
    require('./models/imageModel').Model.create(data, (err)=>{
        
    })

    const Topics = [
        {  Name: 'Cats', Tag: 'cat', Image: 'Cat1'},
        {  Name: 'Dogs', Tag: 'dog', Image: 'Cat2'},
        {  Name: 'General', Tag: 'gen', Image: 'Cat3'}
    ]
    require('./models/topicModel').Model.create(Topics, (err)=>{
        
    })

    const Conf = [
        {  Key: 'Color', Value:'White', Public: true},
        {  Key: 'Username', Value:'Oliver', Public: false},
        {  Key: 'Password', Value:'', Public: false},
        {  Key: 'IG Key', Value:'asdadq2423awdq3r32q', Public: false},
        {  Key: 'IG Link', Value:'https://www.instagram.com/oli.gorges/', Public: true},
        {  Key: 'Logo', Value:'/public/logo.png', Public: true },
        {  Key: 'Title Image', Value:'https://i.kinja-img.com/gawker-media/image/upload/s--kHrQ8nr7--/c_scale,f_auto,fl_progressive,q_80,w_800/18huxz4bvnfjbjpg.jpg', Public: true },
        {  Key: 'Intro', Value:'Welcome to my Portfolio', Public: true },
    ]
    require('./models/configModel').Model.create(Conf, (err)=>{
        
    })
    res.send()
})

// Routers
const sconfig = express.Router()
require('./controllers/config')(sconfig)
app.use('/config', sconfig)

const image = express.Router()
require('./controllers/image')(image)
app.use('/image', image)

const topic = express.Router()
require('./controllers/topic')(topic)
app.use('/topic', topic)

const adminArea = express.Router()
require('./controllers/adminArea')(adminArea)
app.use('/aa', adminArea)

const instagram = express.Router()
require('./controllers/instagram')(instagram)
app.use('/insta', instagram)

// HTTPS Redirect
/**
 * @api {get} Get https page
 */
http.get('/',  (req, res) => { res.redirect(`https://${config.server.host}:${config.server.port}`)})

http.listen(8080)
https.createServer(options, app).listen( config.server.port, () => { console.log(`Server is running on https://${config.server.host}:${config.server.port}`)})