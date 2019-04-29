const controller = require('../controllers/image.controller')
const login = require('../middelware/Login')

module.exports = (app)=>{
    /**
     * @api {get} /image getAllImages
     * @apiGroup Image
     * @apiSuccess {json} Aray with Image Objects 
     */
    app.get('/',login, controller.findAll)

    /**
     * @api {get} /image/displayed getPublicImages
     * @apiGroup Image
     * @apiSuccess {json} Aray with Image Objects 
     */
    app.get('/displayed', controller.findDisplayed)

    /**
     * @api {get} /image/displayed/:topic getPublicImagesByTopic
     * @apiGroup Image
     * @apiSuccess {json} Aray with Image Objects 
     */
    app.get('/displayed/:topic', controller.findDisplayedForTopic)

    /**
     * @api {get} /image/:id getImageById
     * @apiGroup Image
     * @apiSuccess {json} Image Object
     */
    app.get('/:id',login, controller.findByID)

    /**
     * @api {patch} /image/:id updateImageById
     * @apiGroup Image
     * @apiSuccess {json} Object with updated Image Object
     */
    app.patch('/:id',login, controller.updateByID)
}