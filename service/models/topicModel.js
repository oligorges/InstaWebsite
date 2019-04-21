const db = require('mongoose')

const Schema = {
    Name: String,
    Tag: String,
    Image: String,
    Displayed: Boolean
}

const Model = db.model('Topic', Schema)

module.exports = {Model, Schema}