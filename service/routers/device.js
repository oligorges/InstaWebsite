

module.exports = function(app, db) {

    app.get('/', db.read, (req, res)=>{

    })

    app.get('/:ip', db.read, (req, res)=>{

    })

    app.get('/:id', db.read, (req, res)=>{

    })

    app.get('/:id/services', db.read, (req, res)=>{

    })

    app.post('/', db.create, (req, res)=>{
        
    })

    app.delete('/:id', db.delete, (req, res)=>{
        
    })

    app.patch('/:id', db.update, (req, res)=>{
        
    })
}