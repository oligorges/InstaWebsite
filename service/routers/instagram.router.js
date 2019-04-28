
/**
 * @api {get} /instagram/database updateDatabase
 * @apiGroup Instagram
 * @apiSuccess {json} Object with a Message and the amount of new images
 */
app.get('/database', login, (req, res)=>{})

/**
 * @api {get} /instagram/auth authInstagram
 * @apiGroup Instagram
 * @apiSuccess {json} Object with a Link to the Instagram page
 */
app.get('/auth', login, (req, res) => {})

/**
 * @api {get} /instagram/auth/callback instagramCallback
 * @apiGroup Instagram
 * @apiSuccess {json} Object with the Auth code
 */
app.get('/auth/callback', async (req, res) => {})