const express = require('express')
const app = express()
const db = require('mongoose')
const config = require('../config')
const crud = require('./modules/CRUD')
const schemas = require('./DBSchema')

db.connect(`mongodb://${config.server.DBUser}:${config.server.DBPW}@${config.server.DBURL}:${config.server.DBPort}/${config.server.DBTable}`)

const cDevice = new crud('Devices', new db.Schema(schemas.Device))
const cService = new crud('Services', new db.Schema(schemas.Device))
const cBlacklist = new crud('Blacklist', new db.Schema(schemas.Device))

app.get('/', (req, res) => {
    res.send('Comming Soon')
})

const device = express.Router()
require('./routers/device')(device, cDevice)
app.use('/device', device)

const service = express.Router()
require('./routers/service')(service, cService)
app.use('/service', service)

const list = express.Router()
require('./routers/blacklist')(list, cBlacklist)
app.use('/blacklist', list)

app.listen(config.server.port, () => { console.log(`Server is running on http://127.0.0.1:${config.server.port}`)})