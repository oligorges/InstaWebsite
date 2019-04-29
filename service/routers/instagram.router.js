const controller = require('../controllers/instagram.controller')
const login = require('../middelware/Login')

module.exports = (app)=>{
    /**
     * @api {get} /instagram/database updateDatabase
     * @apiGroup Instagram
     * @apiSuccess {json} Object with a Message and the amount of new images
     */
    app.get('/database', login, controller.updateDatabase)

    /**
     * @api {get} /instagram/auth authInstagram
     * @apiGroup Instagram
     * @apiSuccess {json} Object with a Link to the Instagram page
     */
    app.get('/auth', login, controller.getAuthorization)

    /**
     * @api {get} /instagram/auth/callback instagramCallback
     * @apiGroup Instagram
     * @apiSuccess {json} Object with the Auth code
     */
    app.get('/auth/callback', controller.callback)
}