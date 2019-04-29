
const model = require('../models/configModel').Model
const sharp = require('sharp')
const hashPassword = require('../middelware/HashPw')
const defaultConf = require('../../config').server

const findAll = (req, res) => {
    model.find({}, (err, data) => {
        if (err){
            res.send({msg:'Can`t find Object'})
        } else{
            res.send(data)
        }
        
    })
}

const reset = (req, res) => {
    
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
    
}
const findPublic = (req, res) => {
    model.find({Public: true}, (err, data) => {
        if (err){
            res.send({msg:'Can`t find Object'})
        } else{
            res.send(data)
        }
        
    })
}

const findByKey = (req, res)=>{
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
}


const updateLogo = (req, res)=>{
    sharp(req.file.buffer).resize({ height: 500 }).toFile(defaultConf.DistPath+'logo.png', (err, info) => { 
        console.log(err, info)
        if(err){ res.status(400) }
        else{ res.send({info:info}) }
        
        })
}

module.exports = {findAll, findPublic, findByKey, reset, updateLogo}
    
