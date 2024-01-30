require('dotenv').config()

module.exports = {
    db: {
        host: process.env.HOST
    },
    api: {
        port: process.env.PORT,
        secretJWT: process.env.SECRET_JWT
    },
}