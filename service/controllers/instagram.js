
const Insta = require('node-instagram').default
const config = require('../../config')
const model = require('../models/imageModel').Model
const login = require('../middelware/Login')

// Instagram v2
const instagram = new Insta({
    clientId: config.server.insta.clientId,
    clientSecret: config.server.insta.clientSecret,
    accessToken: config.server.insta.token,
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
                model.create({ 
                                Link: element.images.standard_resolution.url, 
                                Thumb: element.images.thumbnail.url,
                                Name: "",
                                Igid: element.id,
                                Topic: "cat",
                                Displayed: false
                            })
            });
        })
        .catch(err => {
            // An error occured
            console.log(err)
            return err
        });

    }

    app.get('/database', login, (req, res)=>{
        let result = getImages()
        res.send({ msg: 'load new Data', size: result} )
    })

    app.get('/auth', login, (req, res) => {
        res.redirect(
        instagram.getAuthorizationUrl( `https://localhost:${config.server.port}/insta/auth/callback`,{scope: ['basic', 'public_content']})
        )
    })

    app.get('/auth/callback', async (req, res) => {
        try {
        // The code from the request, here req.query.code for express
        const code = req.query.code;
        const data = await instagram.authorizeUser(code, `https://localhost:${config.server.port}/insta/auth/data`);
        // data.access_token contain the user access_token
        console.log(data)
        res.json(data);
        } catch (err) {
        res.json(err);
        }
    })
}