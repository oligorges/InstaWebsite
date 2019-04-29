const controller = require('../controllers/topic.controller')
const login = require('../middelware/Login')


module.exports = function(app) {
    /**
     * @api {get} /topic getAllTopics
     * @apiGroup Topics
     * @apiSuccess {json} Array with Topic Objects
     */
    app.get('/', login, controller.findAll)

    /**
     * @api {get} /topic/displayed getDisplayedTopics
     * @apiGroup Topics
     * @apiSuccess {json} Array with Topic Objects
     */
    app.get('/displayed', controller.findDisplayed)

    /**
     * @api {get} /topic/:tag getTopicByTag
     * @apiGroup Topics
     * @apiSuccess {json} Topic Object
     */
    app.get('/:tag', controller.findByTag)

    /**
     * @api {post} /topic getTopics
     * @apiGroup Topics
     * @apiSuccess {json} created Topic Object
     */
    app.post('/', login, controller.create)

    /**
     * @api {delete} /topic/:id deleteTopicById
     * @apiGroup Topics
     * @apiSuccess {json} Success Message
     */
    app.delete('/:id', login, controller.deleteById)

    /**
     * @api {patch} /topic/:id updateTopicById
     * @apiGroup Topics
     * @apiSuccess {json} updated Topic Object
     */
    app.patch('/:id', login, controller.updateById)
}