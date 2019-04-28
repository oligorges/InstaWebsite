
/**
 * @api {get} /image getAllImages
 * @apiGroup Image
 * @apiSuccess {json} Aray with Image Objects 
 */
app.get('/',  (req, res)=>{})

/**
 * @api {get} /image/displayed getPublicImages
 * @apiGroup Image
 * @apiSuccess {json} Aray with Image Objects 
 */
app.get('/displayed', (req, res)=>{})

/**
 * @api {get} /image/displayed/:topic getPublicImagesByTopic
 * @apiGroup Image
 * @apiSuccess {json} Aray with Image Objects 
 */
app.get('/displayed/:topic', (req, res)=>{})

/**
 * @api {get} /image/:id getImageById
 * @apiGroup Image
 * @apiSuccess {json} Image Object
 */
app.get('/:id', (req, res)=>{})

/**
 * @api {patch} /image/:id updateImageById
 * @apiGroup Image
 * @apiSuccess {json} Object with updated Image Object
 */
app.patch('/:id', (req, res)=>{})