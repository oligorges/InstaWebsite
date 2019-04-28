
/**
 * @api {get} /config getConfiguration
 * @apiGroup Config
 * @apiSuccess {json} Object with a Message and the amount of new images
 */
app.get('/', login, (req, res) => {})

/**
 * @api {get} /config/reset resetConfiguration
 * @apiGroup Config
 * @apiSuccess {json} Object with a Message and the amount of new images
 */
app.get('/reset', login,  (req, res) => {}) // Change to Delete

/**
 * @api {get} /config/public getPublicConfiguration
 * @apiGroup Config
 * @apiSuccess {json} Array with Configuration Objects
 */
app.get('/public', (req, res) => {})

/**
 * @api {patch} /config/:key updateConfiguration
 * @apiGroup Config
 * @apiSuccess {json} updated Confiuration Object
 */
app.patch('/:key', login, (req, res)=>{})

/**
 * @api {post} /config/logo uploadLogo
 * @apiGroup Config
 * @apiSuccess {json} Object with image informations
 */
app.post('/logo', login, multer.single('image'), (req, res)=>{})