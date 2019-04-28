
/**
 * @api {get} /topic getAllTopics
 * @apiGroup Topics
 * @apiSuccess {json} Array with Topic Objects
 */
app.get('/', login, (req, res)=>{})

/**
 * @api {get} /topic/displayed getDisplayedTopics
 * @apiGroup Topics
 * @apiSuccess {json} Array with Topic Objects
 */
app.get('/displayed', (req, res)=>{})

/**
 * @api {get} /topic/:tag getTopicByTag
 * @apiGroup Topics
 * @apiSuccess {json} Topic Object
 */
app.get('/:tag', (req, res)=>{})

/**
 * @api {post} /topic getTopics
 * @apiGroup Topics
 * @apiSuccess {json} created Topic Object
 */
app.post('/', login, (req, res)=>{})

/**
 * @api {delete} /topic/:id deleteTopicById
 * @apiGroup Topics
 * @apiSuccess {json} Success Message
 */
app.delete('/:id', login, (req, res)=>{})

/**
 * @api {patch} /topic/:id updateTopicById
 * @apiGroup Topics
 * @apiSuccess {json} updated Topic Object
 */
app.patch('/:id', login, (req, res)=>{})