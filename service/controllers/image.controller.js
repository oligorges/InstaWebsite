const model = require('../models/imageModel').Model



const findAll =  (req, res)=>{
    model.find({}, (err, data) => {
        if (err){
            res.status(500).send({msg:'Can`t find Object'})
        } else{
            res.send(data)
           
        }
        
    })
}

const findDisplayed = (req, res)=>{
    model.find({Displayed:true}, (err, data) => {
        if (err){
            res.status(500).send({msg:'Can`t find Object'})
        } else{
            if(data.length > 0){
                res.send(data)
            }else{
                res.sendStatus(404)
            }
        } 
    })
}
/**
 * Needs a Parameter "topic"
 */
const findDisplayedForTopic = (req, res)=>{
    model.find({Displayed:true, Topic: req.params.topic}, (err, data) => {
        if (err){
            res.status(500).send({msg:'Can`t find Object'})
        } else{
            if(data.length > 0){
                res.send(data)
            }else{
                res.sendStatus(404)
            }
        }
        
    })
    
}


const findByID = (req, res)=>{
    model.findOne({_id: req.params.id}, (err, data) => {
        if (err){
            res.status(500).send({msg:'Can`t find Object'})
        } else{
            if(data){
                res.send(data)
            }else{
                res.sendStatus(404)
            }
        }
        
    })
}

const updateByID = (req, res)=>{
    model.updateOne({_id: req.body._id }, req.body, (err, data) => {
        if (err){
            res.status(500).send({msg:'Can`t update Object'})
        } else{
            console.log(`Object updated =>` , data)
            res.sendStatus(200)
        }
        
    })
    
}

module.exports = {findAll, findByID, findDisplayed, findDisplayedForTopic, updateByID}
