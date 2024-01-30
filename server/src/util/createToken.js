const jwt = require('jsonwebtoken')
const config = require('../../config')

const createTokenJWT = (timeExp, data=null) => {
    try{

        return jwt.sign(data, config.api.secretJWT, {expiresIn: timeExp })
        
    }catch( error ){
        throw new Error("Error createToken")
    }
}

module.exports = createTokenJWT;