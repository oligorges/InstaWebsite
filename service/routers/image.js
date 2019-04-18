

module.exports = function(app, db) {

    function addDBContext(req, res, next){
        req.DBContext = db
        next()
    }

    app.get('/', addDBContext, db.read, (req, res)=>{
       
        res.send(req.body)
    })

    app.get('/displayed', addDBContext, db.read, (req, res)=>{
        res.sendStatus(200)
    })

    app.get('/displayed/:topic', addDBContext, db.read, (req, res)=>{
        res.sendStatus(200)
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