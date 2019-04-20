module.exports = (req, res, next) => {
    console.log(req.user)
    if(req.user){
        req.body = {
            ...req.body,
            UserID: req.user.id
        }
        next()
    }else{
        res.sendStatus(401)
    }

}