
const Insta = require('node-instagram').default
const config = require('../../config')
const imgModel = require('../models/imageModel').Model
const topicModel = require('../models/topicModel').Model
const configModel = require('../models/configModel').Model
let instagram

// Instagram v2
configModel.findOne({Key: "IGKey"}).then(data =>{
    instagram = new Insta({
        clientId: config.server.insta.clientId,
        clientSecret: config.server.insta.clientSecret,
        accessToken: data.Value,
    })
    
}).catch(err=>{
    instagram = new Insta({
        clientId: config.server.insta.clientId,
        clientSecret: config.server.insta.clientSecret
    })
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
                        console.log(err)
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
                    console.log(err)
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
        return {status: 200}
    })
    .catch(err => {
        // An error occured
        console.log(err)
        return {status: 400}
    });

}
const updateDatabase = (req, res)=>{
    getImages().then((data)=>{
        console.log(data)
        if(data.status == 200){
            res.status(200).send({ msg: 'load new Data'} )
        }
        res.status(400).send({ msg: 'Auth error', next: 'insta/auth'})
    }).catch(err =>{
        console.log(err)
        res.status(500).send({ msg: 'Request Error'} )
    })
    
}

const getAuthorization = (req, res) => {
    res.send({ url:
    instagram.getAuthorizationUrl( `https://${config.server.host}:${config.server.port}/insta/auth/callback`,{scope: ['basic', 'public_content']})
    })
}

const callback = async (req, res) => {
    try {
        const code = req.query.code;
        const data = await instagram.authorizeUser(code, `https://${config.server.host}:${config.server.port}/insta/auth/callback`);
        // data.access_token contain the user access_token
        console.log(data)
        instagram = new Insta({
            clientId: config.server.insta.clientId,
            clientSecret: config.server.insta.clientSecret,
            accessToken: data.access_token,
        })
        
        configModel.updateOne({Key: "IGKey"}, {Value: data.access_token}).then(()=>{
            res.send({msg: "Instagram Key updated", next: '/insta/database'})
        }).catch((err)=>{
            res.json(err)
        })
        
    } catch (err) {
        res.json(err);
    }
}

module.exports = { callback, getAuthorization, updateDatabase }