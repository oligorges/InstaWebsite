
const login = require('../middelware/Login')
const multer= require('multer')({limits: { fileSize:1000*1024 }})
const controller = require('../controllers/config.controller')

module.exports = (app)=>{
    /**
     * @api {get} /config getConfiguration
     * @apiGroup Config
     * @apiSuccess {json} Object with a Message and the amount of new images
     */
    app.get('/', login, controller.findAll)

    /**
     * @api {get} /config/public getPublicConfiguration
     * @apiGroup Config
     * @apiSuccess {json} Array with Configuration Objects
     */
    app.get('/public', controller.findPublic)

    /**
     * @api {patch} /config/:key updateConfiguration
     * @apiGroup Config
     * @apiSuccess {json} updated Confiuration Object
     */
    app.patch('/:key', login, controller.findByKey)

    /**
     * @api {post} /config/logo uploadLogo
     * @apiGroup Config
     * @apiSuccess {json} Object with image informations
     */
    app.post('/logo', login, multer.single('image'), controller.updateLogo)

    /**
     * @api {get} /config resetConfiguration
     * @apiGroup Config
     * @apiSuccess {json} Object with a Message and the amount of new images
     */
    app.delete('/', login,  controller.reset) // Change to Delete


}