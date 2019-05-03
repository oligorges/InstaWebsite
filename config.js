
const env = process.env.NODE_ENV || 'dev'

const dev = {   
    server: {
        port: process.env.PORT || 8443,
        httpport: process.env.HttpPORT || 8080,
        host: process.env.HOST || "localhost",
        DBPort: process.env.DBPORT || 27017,
        DBTable: process.env.DBTable || 'InstPort',
        DBUrl: process.env.DBUrl || '127.0.0.1',
        DBUser: process.env.DBUser || '',
        DBPW: process.env.DBPW || '',
        DistPath: process.env.distPath || './public/',
        insta:{
            clientId: process.env.IGClientID || 'adaeb5f3f05b4e02900d7e6d64f8604e',
            clientSecret: process.env.IGSecret || '44b2c8b1cb6b43e2bc9a88cbf9fa5453',
        },
        settings: [
            {  Key: 'Color', Value: process.env.Color || '#000', Public: true},
            {  Key: 'Username', Value: process.env.Username || 'Oliver', Public: false},
            {  Key: 'Password', Value: process.env.Password || 'bec00353fe51634a2c28934b21d1e557dae7b32443e5929c4797dcd587d2dda9', Public: false},
            {  Key: 'IGKey', Value: process.env.IGKey || '', Public: false},
            {  Key: 'IGLink', Value: process.env.IGLink || 'https://www.instagram.com/oli.gorges/', Public: true},
            {  Key: 'TagRegex', Value: process.env.TagRegex || '_.*_', Public: false},
            {  Key: 'Logo', Value: process.env.Logo || '/public/logo.png', Public: true },
            {  Key: 'TitleImage', Value: process.env.HeadImg || 'https://i.kinja-img.com/gawker-media/image/upload/s--kHrQ8nr7--/c_scale,f_auto,fl_progressive,q_80,w_800/18huxz4bvnfjbjpg.jpg', Public: true },
            {  Key: 'Intro', Value: process.env.WelcomeText || 'Welcome to my Portfolio', Public: true },
        ]
    },
    ui:{

    }
}

const prod = {
    server: {
        port: process.env.PORT || 443,
        httpport: process.env.HttpPORT || 80,
        host: process.env.HOST || '',
        DBPort: process.env.DBPORT || 27017,
        DBTable: process.env.DBTable || 'InstPort',
        DBUrl: process.env.DBUrl || '',
        DBUser: process.env.DBUser || '',
        DBPW: process.env.DBPW || '',
        DistPath: process.env.distPath || './public/',
        insta:{
            clientId: process.env.IGClientID || '',
            clientSecret: process.env.IGSecret || '',
        },
        settings: [
            {  Key: 'Color', Value: process.env.Color || '#000', Public: true},
            {  Key: 'Username', Value: process.env.Username || 'Oliver', Public: false},
            {  Key: 'Password', Value: process.env.Password || 'bec00353fe51634a2c28934b21d1e557dae7b32443e5929c4797dcd587d2dda9', Public: false},
            {  Key: 'IGKey', Value: process.env.IGKey || '', Public: false},
            {  Key: 'IGLink', Value: process.env.IGLink || 'https://www.instagram.com/oli.gorges/', Public: true},
            {  Key: 'TagRegex', Value: process.env.TagRegex || '_.*_', Public: false},
            {  Key: 'Logo', Value: process.env.Logo || '/public/logo.png', Public: true },
            {  Key: 'TitleImage', Value: process.env.HeadImg || 'https://i.kinja-img.com/gawker-media/image/upload/s--kHrQ8nr7--/c_scale,f_auto,fl_progressive,q_80,w_800/18huxz4bvnfjbjpg.jpg', Public: true },
            {  Key: 'Intro', Value: process.env.WelcomeText || 'Welcome to my Portfolio', Public: true },
        ]
    },
    ui:{

    }
}

const config = {
    dev,
    prod
   };

module.exports = config[env]