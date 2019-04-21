const model = require('../models/topicModel').Model
const crud = require('../middelware/CRUD')
const login = require('../middelware/Login')
const db = new crud()

module.exports = function(app) {

    app.get('/', login, (req, res)=>{
        model.find({}, (err, data) => {
            if (err){
                res.send({msg:'Can`t find Object'})
            } else{
                res.send(data)
            }
            
        })
    })

    app.get('/displayed', (req, res)=>{
        console.log('Hey')
        model.find({Displayed:true}, (err, data) => {
            console.log(err, data)
            if (err){
                res.status(404).send({msg:'Can`t find Object'})
            } else{
                console.log(data)
                res.send(data)
            }
            
        })
    })


    app.get('/:tag', (req, res)=>{
        model.findOne({Tag: req.params.tag}, (err, data) => {
            if (err){
                res.send({msg:'Can`t find Object'})
            } else{
                res.send(data)
            }
            
        })
    })

    app.post('/', login, (req, res)=>{
        model.create(req.body, (err, data) => {
            if(err) { res.send({msg:'Can`t create Object'}) }
            res.send({msg:'Object created'})
        })
    })

    app.delete('/:id', login, (req, res)=>{
        model.deleteOne({_id: req.params.id},(err, data) => {
            if(err) { res.send({msg:'Can`t delete Object'}) }
            res.send({msg:'Object deleted'})
        })
    })

    app.patch('/:id', login, (req, res)=>{
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