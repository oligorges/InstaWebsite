const controller = require('../controllers/image.controller')
const login = require('../middelware/Login')

module.exports = (app)=>{
    /**
     * @api {get} /image getAllImages
     * @apiGroup Image
     * @apiSuccess {json} Aray with Image Objects 
     * @apiError (401) AuthentificationError Endpoint can only be used when the user is loged in.
     * @apiError (500) Database Error
     */
    app.get('/',login, controller.findAll)

    /**
     * @api {get} /image/displayed getPublicImages
     * @apiGroup Image
     * @apiSuccess {json} Images Aray with Image Objects 
     * @apiError (404) NotFound Can't find requested ressourses
     * @apiError (500) InternalServerError Database Error
     */
    app.get('/displayed', controller.findDisplayed)

    /**
     * @api {get} /image/displayed/:topic getPublicImagesByTopic
     * @apiGroup Image
     * @apiParam (topic) tag the identify a Topic
     * @apiSuccess {json} Images Aray with Image Objects 
     * @apiError (404) NotFound Can't find requested ressourses
     * @apiError (500) InternalServerErrorDatabase Error
     */
    app.get('/displayed/:topic', controller.findDisplayedForTopic)

    /**
     * @api {get} /image/:id getImageById
     * @apiGroup Image
     * @apiParam (ID) Image ID
     * @apiSuccess {json} Image Image Object
     * @apiError (401) AuthentificationError Endpoint can only be used when the user is loged in.
     * @apiError (404) NotFound Can't find requested ressourses
     * @apiError (500) InternalServerError Database Error
     */
    app.get('/:id',login, controller.findByID)

    /**
     * @api {patch} /image/:id updateImageById
     * @apiGroup Image
     * @apiParam (ID) Image ID
     * @apiSuccess {json} Image Object with updated Image Object
     * @apiError (401) AuthentificationError Endpoint can only be used when the user is loged in.
     * @apiError (500) InternalServerError Database Error
     */
    app.patch('/:id',login, controller.updateByID)
}