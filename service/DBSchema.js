const Device = {
    IP: String,
    MAC: String,
    Name: String,
    Desc: String,
    Tags: [String],
    Attrs: [{
        Key: String,
        Value: String
    }],
    Available: Boolean
}

const Service = {
    Name: String,
    Device: Number,
    Port: Number,
    Tags: [String],
    Attrs: [{
        Key: String,
        Value: String
    }],
    Available: Boolean
}

const Blacklist = {
    D: Number,
    Type: {
        type: String,
        enum: ["mac", "ip"]
    },
    Value: String,
    Res: String
}

module.exports = {Device, Service, Blacklist}