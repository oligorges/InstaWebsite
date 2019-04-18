module.exports = function(app, db) {

    function addDBContext(req, res, next){
        req.DBContext = db
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