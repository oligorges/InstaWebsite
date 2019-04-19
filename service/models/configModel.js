const db = require('mongoose')

const Schema = {
    Key: String,
    Value: String
}

const Model = db.model('Config', Schema)

module.exports = {Model, Schema}