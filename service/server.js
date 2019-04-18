const express = require('express')
const app = express()
const db = require('mongoose')
const config = require('../config')
const crud = require('./modules/CRUD')
const bodyParser = require('body-parser')
const schemas = require('./DBSchema')
const morgan = require('morgan')
const pass = require('passport')
const session = require('express-session')
const helmet = require('helmet')
const LocalStrategy = require('passport-local').Strategy;
require('dotenv').config();

app.use(bodyParser.urlencoded({ extended: true })) // For Formdata
app.use(bodyParser.json()) // For JSON
app.use(morgan('dev'))
app.use(helmet())
app.use(session({ secret: process.env.SessionSeed, resave: false, saveUninitialized: false }))
app.use(pass.initialize())
app.use(pass.session());
app.enable('trust proxy')

// DB
console.log(config.server)
db.connect(`mongodb://${config.server.DBUrl}:${config.server.DBPort}/${config.server.DBTable}`, {useNewUrlParser: true})
const cConfig = new crud('Config', new db.Schema(schemas.Config))
const cImage = new crud('Image', new db.Schema(schemas.Image))
const cTopic = new crud('Topic', new db.Schema(schemas.Topic))

// Login 
pass.use(new LocalStrategy(
    (username, password, done) => {
       
        if (username == process.env.username1 && password == process.env.password1) {
            return done(null, {id: process.env.userid1, name: process.env.username1}); // returned object usally contains something to identify the user
        }
        if (username == process.env.username2 && password == process.env.password2) {
            return done(null, {id: process.env.userid2, name: process.env.username2}); // returned object usally contains something to identify the user
        }
        done(null, false, {message: 'Incorrect credentials.'});
        return;
    }
));

pass.serializeUser(function(user, cb) {
    console.log('Serial')
    cb(null, user.id);
  });
  
pass.deserializeUser(function(id, cb) {
    console.log('Deserial')
    cb(null, {id: id});
});
const login = (req, res, next) => {
    console.log(req.user)
    if(req.user){
        req.body = {
            ...req.body,
            UserID: req.user.id
        }
        next()
    }else{
        res.sendStatus(401)
    }

}

app.use('/', express.static('../vue-ui/dist'))

app.get('/login', login, (req, res) => {
    res.sendStatus(200)
})

app.post('/login', (req, res, next) => {
  pass.authenticate('local', (err, user, info) => {
    if (err) {
      return next(err);
    }
    if (!user) {
      return res.status(400).send(info);
    }
    req.login(user, err => {
      res.send("Logged in");
    });
  })(req, res, next)
})

app.get('/logout', function(req, res){
    req.logout()
    res.sendStatus(200)
})

app.delete('/database', function(req, res){
    cImage.model.collection.drop();
    cTopic.model.collection.drop()
    res.send()
})

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
    cImage.model.create(data, (err)=>{
        res.send()
    })

    const Topics = [
        {  Name: "Cats", Tag: "cat", Image: "Cat1"},
        {  Name: "Dogs", Tag: "dog", Image: "Cat2"},
        {  Name: "General", Tag: "gen", Image: "Cat3"}
    ]
    cTopic.model.create(Topics, (err)=>{
        res.send()
    })

    const Conf = [
        {  Key: "Color", Value:"White"},
        {  Key: "Username", Value:"Oliver"},
        {  Key: "Password", Value:""},
        {  Key: "IG Key", Value:"asdadq2423awdq3r32q" }

    ]
    cConfig.model.create(Conf, (err)=>{
        res.send()
    })
    
})

const sconfig = express.Router()
require('./routers/config')(sconfig, cConfig)
app.use('/config', login, sconfig)

const image = express.Router()
require('./routers/image')(image, cImage)
app.use('/image', image)

const topic = express.Router()
require('./routers/topic')(topic, cTopic)
app.use('/topic', topic)



app.listen(config.server.port, () => { console.log(`Server is running on http://127.0.0.1:${config.server.port}`)})