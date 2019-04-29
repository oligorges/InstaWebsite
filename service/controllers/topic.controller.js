const model = require('../models/topicModel').Model

const findAll = (req, res)=>{
    model.find({}, (err, data) => {
        if (err){
            res.send({msg:'Can`t find Object'})
        } else{
            res.send(data)
        }
        
    })
}

const findDisplayed = (req, res)=>{
    model.find({Displayed:true}, (err, data) => {
        console.log(err, data)
        if (err){
            res.status(404).send({msg:'Can`t find Object'})
        } else{
            console.log(data)
            res.send(data)
        }
        
    })
}

const findByTag = (req, res)=>{
    model.findOne({Tag: req.params.tag}, (err, data) => {
        if (err){
            res.send({msg:'Can`t find Object'})
        } else{
            res.send(data)
        }
        
    })
}

const create = (req, res)=>{
        model.create(req.body, (err, data) => {
            if(err) { res.send({msg:'Can`t create Object'}) }
            res.send({msg:'Object created'})
        })
    }

const deleteById = (req, res)=>{
        model.deleteOne({_id: req.params.id},(err, data) => {
            if(err) { res.send({msg:'Can`t delete Object'}) }
            res.send({msg:'Object deleted'})
        })
    }

const updateById = (req, res)=>{
        model.updateOne({_id: req.body._id }, req.body, (err, data) => {
            if (err){
                res.send({msg:'Can`t update Object'})
            } else{
                console.log(`Object updated =>` , data)
                res.sendStatus(200)
            }
            
        })
    }
module.exports = {findDisplayed, findByTag, findAll, create, deleteById, updateById }