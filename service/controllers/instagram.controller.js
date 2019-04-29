
const Insta = require('node-instagram').default
const config = require('../../config')
const imgModel = require('../models/imageModel').Model
const topicModel = require('../models/topicModel').Model
const configModel = require('../models/configModel').Model
let instagram;
// Instagram v2

    instagram = new Insta({
        clientId: config.server.insta.clientId,
        clientSecret: config.server.insta.clientSecret,
        accessToken: config.server.insta.key,
      })



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
        console.log('getImageData')
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
            console.log(err)
            return err
        });

    }
    const updateDatabase = (req, res)=>{
        let result = getImages()
        res.send({ msg: 'load new Data', size: result} )
    }
    
    const getAuthorization = (req, res) => {
        res.send({ url:
        instagram.getAuthorizationUrl( `https://${config.server.port}:${config.server.port}/insta/auth/callback`,{scope: ['basic', 'public_content']})
        })
    }
    
    const callback = async (req, res) => {
        try {
            // The code from the request, here req.query.code for express
            const code = req.query.code;
            const data = await instagram.authorizeUser(code, `https://${config.server.port}:${config.server.port}/insta/auth/data`);
            // data.access_token contain the user access_token
            console.log(data)
            configModel.updateOne({Key: "IGKey"}, {Value: data.access_token}).then(()=>{
                res.send({msg: "Instagram Key updated"})
            }).catch((err)=>{
                res.json(err)
            })
            
        } catch (err) {
            res.json(err);
        }
    }

    module.exports = { callback, getAuthorization, updateDatabase }