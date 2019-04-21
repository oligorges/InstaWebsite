const model = require('../models/imageModel').Model
const crud = require('../middelware/CRUD')
const db = new crud()

module.exports = function(app) {

    

    app.get('/',  (req, res)=>{
        model.find({}, (err, data) => {
            if (err){
                res.send({msg:'Can`t find Object'})
            } else{
                res.send(data)
            }
            
        })
    })

    app.get('/displayed', (req, res)=>{
        model.find({Displayed:true}, (err, data) => {
            if (err){
                res.send({msg:'Can`t find Object'})
            } else{
                res.send(data)
            } 
        })
    })

    app.get('/displayed/:topic', (req, res)=>{
        model.find({Displayed:true, Topic: req.params.topic}, (err, data) => {
            if (err){
                res.send({msg:'Can`t find Object'})
            } else{
                res.send(data)
            }
            
        })
        
    })

    app.get('/:id', (req, res)=>{
        model.findOne({_id: req.params.id}, (err, data) => {
            if (err){
                res.send({msg:'Can`t find Object'})
            } else{
                res.send(data)
            }
            
        })
    })

    app.post('/', (req, res)=>{
        res.sendStatus(500)
    })

    app.delete('/:id', (req, res)=>{
        res.sendStatus(500)
    })

    app.patch('/:id', (req, res)=>{
        model.updateOne({_id: req.body._id }, req.body, (err, data) => {
            if (err){
                res.send({msg:'Can`t update Object'})
            } else{
                console.log(`Object updated =>` , data)
                res.sendStatus(200)
            }
            
        })
        
    })
}