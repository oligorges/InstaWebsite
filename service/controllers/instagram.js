
const Insta = require('node-instagram').default
const config = require('../../config')
const imgModel = require('../models/imageModel').Model
const topicModel = require('../models/topicModel').Model
const configModel = require('../models/configModel').Model
const login = require('../middelware/Login')
let instagram;
// Instagram v2

configModel.findOne({Key: 'IGKey'}).then(data=>{
    instagram = new Insta({
        clientId: config.server.insta.clientId,
        clientSecret: config.server.insta.clientSecret,
        accessToken: data.Value
      })
}).catch(err=>{
    instagram = new Insta({
        clientId: config.server.insta.clientId,
        clientSecret: config.server.insta.clientSecret
      })
})

module.exports = function(app) {

    const getUserInfo = ()=>{
        instagram
        .get('users/self')
        .then(data => {
            return data
        })
        .catch(err => {
            // An error occured
            return err
        })

    }

    const getImages = ()=>{
        return instagram
        .get('users/self/media/recent')
        .then(result => {
            console.log(result)
            result.data.forEach(element => {
                const tag = element.tags.find(tag => tag.match('_.*_'))
                
                if(element.carousel_media){
                    element.carousel_media.forEach((subelement, index) => {
                        imgModel.create({ 
                            Link: subelement.images.standard_resolution.url, 
                            Thumb: subelement.images.low_resolution.url,
                            Title: "",
                            Igid: element.id+'-'+index,
                            Topic: tag,
                            Displayed: false
                        }).catch(err =>{
                        })
                    })
                }else{
                    imgModel.create({ 
                        Link: element.images.standard_resolution.url, 
                        Thumb: element.images.low_resolution.url,
                        Title: "",
                        Igid: element.id,
                        Topic: tag,
                        Displayed: false
                    }).catch(err => {
                    })
                }

                // Create new entry
                if(tag){
                    topicModel.create({
                        Title: tag,
                        Tag: tag,
                        Image: element.images.low_resolution.url,
                        Displayed: false
                    }).catch(err =>{ 
                        console.log(err)
                    })
                }
                
                    
                
            });
        })
        .catch(err => {
            // An error occured
            return err
        });

    }

     /**
   * @api {get} /instagram/database Updates the Database with new Images from Instagram
   * @apiGroup Instagram
   * @apiSuccess {json} Object with a Message and the amount of new images
   */
    app.get('/database', login, (req, res)=>{
        let result = getImages()
        res.send({ msg: 'load new Data', size: result} )
    })
    /**
     * @api {get} /instagram/database Redirects the user to the Instagram Authentification Page to generate the Token
     * @apiGroup Instagram
     * @apiSuccess {redirect} Redirect to Instagram
     */
    app.get('/auth', login, (req, res) => {
        res.redirect(
        instagram.getAuthorizationUrl( `https://${config.server.port}:${config.server.port}/insta/auth/callback`,{scope: ['basic', 'public_content']})
        )
    })

    /**
     * @api {get} /instagram/database Callback Endpoint to Recieve the Authentifcation code form Instagram
     * @apiGroup Instagram
     * @apiSuccess {json} User Information
     * @apiSuccess {json} Error Message
     */
    app.get('/auth/callback', async (req, res) => {
        try {
            // The code from the request, here req.query.code for express
            const code = req.query.code;
            const data = await instagram.authorizeUser(code, `https://${config.server.port}:${config.server.port}/insta/auth/data`);
            // data.access_token contain the user access_token
            console.log(data)
            res.json(data);
        } catch (err) {
            res.json(err);
        }
    })
}