const db = require('mongoose')

const Schema = {
    Name: String,
    Tag: String,
    Image: String
}

const Model = db.model('Topic', Schema)

module.exports = {Model, Schema}