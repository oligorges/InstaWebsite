
 
function CRUD () { 
}
CRUD.prototype.create = (req, res, next) => {
    
    if(!req.DBModel) throw new Error('No Model initialized')
    req.DBModel.create(req.body, (err, data) => {
        if (err){
            res.send('Can`t create Object')
        } else{
            console.log(data, ' created')
            next()
        }
        
    })
}
CRUD.prototype.read = (req, res, next) => {
    if(!req.DBModel) throw new Error('No Model initialized')
    if(req.query){ // for GET requests
        var filter = req.query
    }else if(req.body){ // for other requests
        var filter = req.body
    }else{
        var filter = {} // no filter
    }
    if(filter.id){
        var filter = {_id: filter.id }
    }
    
    req.DBModel.find(filter, req.body, (err, data) => {
        if (err){
            res.send({msg:'Can`t find Object'})
        } else{
            req.body = data
            next()
        }
        
    })
}
CRUD.prototype.update = function (req, res, next) {
    if(!this.model) throw new Error('No Model initialized')
    if(req.body.id){
        var id = req.body.id
    }else{
        var id = -1 // no valid id
    }
    
    this.model.updateOne({_id: id }, req.body, (err, data) => {
        if (err){
            res.send('Can`t update Object')
        } else{
            console.log(`Object ${id} updated =>` , data)
            next()
        }
        
    })
},
CRUD.prototype.delete = function (req, res, next) {
    if(!this.model) throw new Error('No Model initialized')
    if(req.param.id){
        var id = req.param.id
    }else if(req.query.id){
        var id = req.query.id
    }else if(req.body){
        var id = req.body.id
    }else{
        var id = -1 // no valid id
    }
    
    this.model.deleteOne({_id: id }, (err) => {
        if (err){
            res.send('Can`t delete Object')
        } else{
            console.log(`Object ${id} deleted`)
            next()
        }
        
    })
}

module.exports = CRUD
    
