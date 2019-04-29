const controller = require('../controllers/adminArea.controller')
const login = require('../middelware/Login')

module.exports = (app)=>{
    /**
     * @api {get} /aa/login getLogin
     * @apiGroup AdminArea
     * @apiSuccess {json} User Object
     */
    app.get('/login', login, (req, res) => {
        res.sendStatus(200)
    })

    /**
     * @api {post} /aa/login sendLogin
     * @apiGroup AdminArea
     * @apiSuccess {json} User Object
     */
    app.post('/login',controller.login)

    /**
     * @api {get} /aa/logout sendLogout
     * @apiGroup AdminArea
     * @apiSuccess {json} Success Message
     */
    app.get('/logout', controller.logout)

}