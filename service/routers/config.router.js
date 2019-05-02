
const login = require('../middelware/Login')
const multer= require('multer')({limits: { fileSize:5000*1024 }})
const controller = require('../controllers/config.controller')

module.exports = (app)=>{
    /**
     * @api {get} /config getConfiguration
     * @apiGroup Config
     * @apiSuccess {json} Configuration Object with a Message and the amount of new images
     * @apiError (401) AuthentificationError Endpoint can only be used when the user is loged in.
     * @apiError (500) InternalServerError Database Error 
     */
    app.get('/', login, controller.findAll)

    /**
     * @api {get} /config/public getPublicConfiguration
     * @apiGroup Config
     * @apiSuccess {json} Array with Configuration Objects
     * @apiError (404) NotFound Can't find requested ressourses
     * @apiError (500) InternalServerError Database Error
     */
    app.get('/public', controller.findPublic)

    /**
     * @api {patch} /config/:key updateConfiguration
     * @apiGroup Config
     * @apiParam (Key) Configurations Key 
     * @apiSuccess {json} Configuration Updated Confiuration Object
     * @apiError (404) NotFound, Can't find requested ressourses
     * @apiError (500) InternalServerError Database Error
     */
    app.patch('/:key', login, controller.findByKey)

    /**
     * @api {post} /config/logo uploadLogo
     * @apiGroup Config
     * @apiSuccess {json} Info Object with image informations
     * @apiError (401) AuthentificationError Endpoint can only be used when the user is loged in.
     * @apiError (404) NotFound Can't find requested ressourses
     * @apiError (500) InternalServerError Database Error
     */
    app.post('/logo', login, multer.single('image'), controller.updateLogo)

    /**
     * @api {get} /config resetConfiguration
     * @apiGroup Config
     * @apiSuccess {json} Configuration Object with a Message and the amount of new images
     * @apiError (401) AuthentificationError Endpoint can only be used when the user is loged in.
     * @apiError (413) PayloadTooLarge Maximum size 5Mb
     * @apiError (500) InternalServerError Database Error
     */
    app.delete('/', login,  controller.reset) // Change to Delete


}