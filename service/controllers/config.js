
const model = require('../models/configModel').Model
const crypto = require('crypto');
const sharp = require('sharp')
const multer= require('multer')
const login = require('../middelware/Login')

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
        model.updateOne({Key: req.params.key}, req.body, (err, data) => {
            if (err){
                res.send({msg:'Can`t find Object'})
            } else{
                res.send(data)
            }
            
        })
    })

    app.patch('/password', login,  (req, res)=>{
        const hash = crypto.createHmac('sha256', process.env.salt)
        .update(req.body.password)
        .digest('hex');
        process.env.password = hash
    })

    app.post('/logo', login, multer.single('image'), (req, res)=>{
        sharp(req.file).resize({ height: 500 }).toFile('./public/logo.png', (err, info) => { 
            console.log(err, info)
         })
    })
    
}