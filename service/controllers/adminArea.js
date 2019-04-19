
const pass = require('passport')

module.exports = function(app, login) {

    app.get('/login', login, (req, res) => {
        res.sendStatus(200)
    })
    
    app.post('/login', (req, res, next) => {
      pass.authenticate('local', (err, user, info) => {
        if (err) {
          return next(err);
        }
        if (!user) {
          return res.status(400).send(info);
        }
        req.login(user, err => {
          res.send("Logged in");
        });
      })(req, res, next)
    })
    
    app.get('/logout', function(req, res){
        req.logout()
        res.sendStatus(200)
    })
    
}