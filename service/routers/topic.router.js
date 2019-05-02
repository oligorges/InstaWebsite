const controller = require('../controllers/topic.controller')
const login = require('../middelware/Login')


module.exports = function(app) {
    /**
     * @api {get} /topic getAllTopics
     * @apiGroup Topics
     * @apiSuccess {json} Topics Array with Topic Objects
     * @apiError (401) AuthentificationError Endpoint can only be used when the user is loged in.
     * @apiError (500) InternalServerError Database Error
     */
    app.get('/', login, controller.findAll)

    /**
     * @api {get} /topic/displayed getDisplayedTopics
     * @apiGroup Topics
     * @apiSuccess {json} Topics Array with Topic Objects
     * @apiError (404) NotFound Can't find requested ressourses
     * @apiError (500) InternalServerError Database Error
     */
    app.get('/displayed', controller.findDisplayed)

    /**
     * @api {get} /topic/:tag getTopicByTag
     * @apiGroup Topics
     * @apiParam (Tag) tag to identify a topic
     * @apiSuccess {json} Topics Topic Object
     * @apiError (404) NotFound Can't find requested ressourses
     * @apiError (500) InternalServerError Database Error
     */
    app.get('/:tag', controller.findByTag)

    /**
     * @api {post} /topic getTopics
     * @apiGroup Topics
     * @apiSuccess {json} Topic created Topic Object
     * @apiError (401) AuthentificationError Endpoint can only be used when the user is loged in.
     * @apiError (500) InternalServerError Database Error
     */
    app.post('/', login, controller.create)

    /**
     * @api {delete} /topic/:id deleteTopicById
     * @apiGroup Topics
     * @apiParam (ID) Topic ID
     * @apiSuccess {json} MSG Success Message
     * @apiError (401) AuthentificationError Endpoint can only be used when the user is loged in.
     * @apiError (500) InternalServerError Database Error
     */
    app.delete('/:id', login, controller.deleteById)

    /**
     * @api {patch} /topic/:id updateTopicById
     * @apiGroup Topics
     * @apiParam (ID) Topic ID
     * @apiSuccess {json} Topic updated Topic Object
     * @apiError (401) AuthentificationError Endpoint can only be used when the user is loged in.
     * @apiError (404) NotFound Can't find requested ressourses
     * @apiError (500) InternalServerError Database Error
     */
    app.patch('/:id', login, controller.updateById)
}