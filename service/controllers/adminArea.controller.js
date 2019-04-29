const pass = require('passport')

const login = (req, res, next) => {
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
}

const logout = (req, res)=>{
    req.logout()
    res.sendStatus(200)
}

module.exports = {login, logout}