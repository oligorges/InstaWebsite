const controller = require('../controllers/instagram.controller')
const login = require('../middelware/Login')

module.exports = (app)=>{
    /**
     * @api {get} /instagram/database updateDatabase
     * @apiGroup Instagram
     * @apiSuccess {json} Object with a Message and the amount of new images
     * @apiError (401) AuthentificationError Endpoint can only be used when the user is loged in.
     * @apiError (500) Database Error
     */
    app.get('/database', login, controller.updateDatabase)

    /**
     * @api {get} /instagram/auth authInstagram
     * @apiGroup Instagram
     * @apiSuccess {json} Object with a Link to the Instagram page
     * @apiError (401) AuthentificationError Endpoint can only be used when the user is loged in.
     * @apiError (500) Database Error
     */
    app.get('/auth', login, controller.getAuthorization)

    /**
     * @api {get} /instagram/auth/callback instagramCallback
     * @apiGroup Instagram
     * @apiSuccess {json} Object with the Auth code
     * @apiError (500) Database Error
     */
    app.get('/auth/callback', controller.callback)
}