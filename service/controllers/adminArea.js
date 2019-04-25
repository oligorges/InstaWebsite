const login = require('../middelware/Login')
const pass = require('passport')

module.exports = function(app) {

    app.get('/login', login, (req, res) => {
        res.sendStatus(200)
    })
    /**
   * @api {post} /aa/Login checks if the user can login
   * @apiName Login
   * @apiGroup aa
   *
   * @apiSuccess {json} Mesage
   */
    app.post('/login', (req, res, next) => {
      pass.authenticate('local', (err, user, info) => {
        if (err) {
          return next(err);
        }
        if (!user) {
          return res.status(400).send({info: info});
        }
        req.login(user, err => {
          res.send({msg: "Logged in"});
        });
      })(req, res, next)
    })
    /**
   * @api {post} /login
   * @apiGroup aa
   */
    app.get('/logout', function(req, res){
        req.logout()
        res.sendStatus(200)
    })
    
}