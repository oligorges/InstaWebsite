
const model = require('../models/configModel').Model
const crud = require('../middelware/CRUD')
const crypto = require('crypto');
const sharp = require('sharp')
const multer= require('multer')
const db = new crud()
module.exports = function(app) {

    +

    app.get('/', (req, res) => {
        model.find({}, (err, data) => {
            if (err){
                res.send({msg:'Can`t find Object'})
            } else{
                res.send(data)
            }
            
        })
    })

    app.patch('/:key', (req, res)=>{
        model.updateOne({Key: req.params.key}, req.body, (err, data) => {
            if (err){
                res.send({msg:'Can`t find Object'})
            } else{
                res.send(data)
            }
            
        })
    })

    app.patch('/password',  (req, res)=>{
        const hash = crypto.createHmac('sha256', process.env.salt)
        .update(req.body.password)
        .digest('hex');
        process.env.password = hash
    })

    app.post('/logo', multer.single('image'), (req, res)=>{
        sharp(req.file).resize({ height: 500 }).toFile('./public/logo.png', (err, info) => { 
            console.log(err, info)
         })
    })
    
}