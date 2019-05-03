
const db = require('mongoose')
const model = require('../models/configModel').Model
const config = require('../../config')

db.connect(`mongodb://${config.server.DBUser}:${config.server.DBPW}@${config.server.DBUrl}:${config.server.DBPort}/${config.server.DBTable}`, {useNewUrlParser: true})

model.createCollection().then(() => {
    console.log('crated Table')
    return model.create(config.server.settings)
}).then(()=>{
    console.log('Init new Settings')
}).catch((err)=>{
    console.log(err);
})