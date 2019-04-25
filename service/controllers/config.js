
const model = require('../models/configModel').Model
const sharp = require('sharp')
const multer= require('multer')({limits: { fileSize:1000*1024 }})
const login = require('../middelware/Login')
const hashPassword = require('../middelware/HashPw')
const defaultConf = require('../../config').server

module.exports = function(app) {

    app.get('/', login, (req, res) => {
        model.find({}, (err, data) => {
            if (err){
                res.send({msg:'Can`t find Object'})
            } else{
                res.send(data)
            }
            
        })
    })

    app.get('/reset', login,  (req, res) => {
       
        model.collection.drop().then(()=>{
            console.log('deleted Table')
           return model.createCollection()
        }).then(() => {
            console.log('crated Table')
            return model.create(defaultConf.settings)
        }).then(()=>{
            console.log('Init new Settings')
            res.sendStatus(200)
        }).catch((err)=>{
            console.log(err);
            res.status(400).send({msg: err})
        })
        
    })

    app.get('/public', (req, res) => {
        model.find({Public: true}, (err, data) => {
            if (err){
                res.send({msg:'Can`t find Object'})
            } else{
                res.send(data)
            }
            
        })
    })

    app.patch('/:key', login, (req, res)=>{
        console.log(req.params.key)
        if(req.params.key === 'password'){
            req.body = {Value: hashPassword(req.body.Value)}
        }
        model.updateOne({Key: req.params.key}, req.body, (err, data) => {
            if (err){
                res.send({msg:'Can`t find Object'})
            } else{
                res.send(data)
            }
            
        })
    })

    

    app.post('/logo', login, multer.single('image'), (req, res)=>{
        sharp(req.file.buffer).resize({ height: 500 }).toFile(defaultConf.DistPath+'logo.png', (err, info) => { 
            console.log(err, info)
            if(err){ res.status(400) }
            else{ res.send({info:info}) }
            
         })
    })
    
}