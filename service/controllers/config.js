
const model = require('../models/configModel').Model
const crud = require('../middelware/CRUD')
const db = new crud()
module.exports = function(app) {

    function addDBContext(req, res, next){
        req.DBModel = model
        next()
    }

    app.get('/', addDBContext , db.read, (req, res) => {
        res.send(req.body)
    })

    app.patch('/:key', addDBContext, db.update, (req, res)=>{
        res.sendStatus(200)
    })

    app.post('/logo',  (req, res)=>{

    })
}