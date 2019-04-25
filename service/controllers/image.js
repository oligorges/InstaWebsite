const model = require('../models/imageModel').Model
const crud = require('../middelware/CRUD')
const db = new crud()

module.exports = function(app) {

     /**
   * @api {get} /image returns All Images from the Database
   * @apiGroup Image
   *
   * @apiSuccess {json} Array with all Images from the Database
   * @apiError {json} Message 
   */

    app.get('/',  (req, res)=>{
        model.find({}, (err, data) => {
            if (err){
                res.send({msg:'Can`t find Object'})
            } else{
                res.send(data)
            }
            
        })
    })

      /**
   * @api {get} /image/displayed returns all Images that should be displayed on the public page
   * @apiGroup Image
   *
   * @apiSuccess {json} Array with displayed Images from the Database
   * @apiError {json} Message 
   */
    app.get('/displayed', (req, res)=>{
        model.find({Displayed:true}, (err, data) => {
            if (err){
                res.send({msg:'Can`t find Object'})
            } else{
                res.send(data)
            } 
        })
    })
  /**
   * @api {get} /image/displayed returns all Images that should be displayed on the public page for one topic
   * @apiGroup Image
   * @apiParam {String} Image Topic
   * @apiSuccess {json} Array with displayed Images from the Database with the Topic
   * @apiError {json} Message 
   */
    app.get('/displayed/:topic', (req, res)=>{
        model.find({Displayed:true, Topic: req.params.topic}, (err, data) => {
            if (err){
                res.send({msg:'Can`t find Object'})
            } else{
                res.send(data)
            }
            
        })
        
    })
    /**
   * @api {get} /image/displayed returns the Image with the given ID
   * @apiGroup Image
   * @apiParam {Number} Image ID
   * @apiSuccess {json} ImageObject form the Database
   * @apiError {json} Message 
   */
    app.get('/:id', (req, res)=>{
        model.findOne({_id: req.params.id}, (err, data) => {
            if (err){
                res.send({msg:'Can`t find Object'})
            } else{
                res.send(data)
            }
            
        })
    })
    /**
     * @api {get} /image/displayed updates the Data from Image Object wit the given ID
     * @apiGroup Image
     * @apiParam {Number} Image ID
     * @apiSuccess {status} 200 
     * @apiError {json} Message 
     */
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