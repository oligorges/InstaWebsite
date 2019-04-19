const model = require('../models/imageModel').Model
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

    app.get('/displayed', addDBContext, db.read, (req, res)=>{
        let images = req.body.filter(image => image.Displayed);
        res.send(images)
    })

    app.get('/displayed/:topic', addDBContext, db.read, (req, res)=>{
        let images = req.body.filter(image => image.Displayed && image.Topic === req.param.topic );
        res.send(images)
    })

    app.get('/:id', addDBContext, db.read, (req, res)=>{
        res.sendStatus(200)
    })

    app.post('/', addDBContext, db.create, (req, res)=>{
        res.sendStatus(200)
    })

    app.delete('/:id', addDBContext, db.delete, (req, res)=>{
        res.sendStatus(200)
    })

    app.patch('/:id', db.update, (req, res)=>{
        res.sendStatus(200)
    })
}