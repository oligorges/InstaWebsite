
/**
 * @api {get} /aa/login getLogin
 * @apiGroup AdminArea
 * @apiSuccess {json} User Object
 */
app.get('/login', login, (req, res) => {})

/**
 * @api {post} /aa/login sendLogin
 * @apiGroup AdminArea
 * @apiSuccess {json} User Object
 */
app.post('/login', (req, res, next) => {})

/**
 * @api {get} /aa/logout sendLogout
 * @apiGroup AdminArea
 * @apiSuccess {json} Success Message
 */
app.get('/logout', function(req, res){})