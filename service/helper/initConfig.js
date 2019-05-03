const model = require('../models/configModel').Model
const defaultConf = require('../../config').server

model.collection.drop().then(()=>{
    console.log('deleted Table')
    return model.createCollection()
}).then(() => {
    console.log('crated Table')
    return model.create(defaultConf.settings)
}).then(()=>{
    console.log('Init new Settings')
}).catch((err)=>{
    console.log(err);
})