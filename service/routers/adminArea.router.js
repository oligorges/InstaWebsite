const controller = require('../controllers/adminArea.controller')
const login = require('../middelware/Login')

module.exports = (app)=>{
    /**
     * @api {get} /aa/login getLogin
     * @apiGroup AdminArea
     * @apiSuccess {json} User User Object
     * @apiError (401) AuthentificationError Endpoint can only be used when the user is loged in.
     */
    app.get('/login', login, (req, res) => {
        res.sendStatus(200)
    })

    /**
     * @api {post} /aa/login sendLogin
     * @apiGroup AdminArea
     * @apiSuccess {json} User User Object
     * @apiError (400) BadRequest Wrong Username or Password.
     */
    app.post('/login',controller.login)

    /**
     * @api {get} /aa/logout sendLogout
     * @apiGroup AdminArea
     * @apiSuccess {json} MSG Success Message
     */
    app.get('/logout', controller.logout)

}