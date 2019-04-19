const model = require('../models/topicModel').Model
const crud = require('../middelware/CRUD')
const db = new crud()

module.exports = function(app) {

    function addDBContext(req, res, next){
        req.DBModel = model
        next()
    }

    app.get('/', addDBContext, db.read, (req, res)=>{
        res.send(req.body)
    })

    app.post('/', addDBContext, db.create, (req, res)=>{
        res.sendStatus(200)
    })

    app.delete('/:id', addDBContext, db.delete, (req, res)=>{
        res.sendStatus(200)
    })

    app.patch('/:id', addDBContext, db.update, (req, res)=>{
        res.sendStatus(200)
    })
}