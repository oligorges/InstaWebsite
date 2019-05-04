const crypto = require('crypto');
const config = require('../../config')

module.exports = (password)=>{
    return crypto.createHmac('sha256', config.server.pwsalt)
    .update(password)
    .digest('hex');
}
