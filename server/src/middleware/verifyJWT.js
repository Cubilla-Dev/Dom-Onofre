const jwt = require('jsonwebtoken')
const config = require('../../config')

const verifiJWT = ( req,res,next ) => {
    try {
        const { authorization } = req.headers;
        if (!authorization){
            throw new Error('Not autorizzation header inside the request')
        }
        const token = authorization.split(' ')[1];
        req.userId = jwt.verify(token, config.api.secretJWT)
        next();
    }catch(error){
        return res.status(400).json({erro: 'JWT', message: error.message}).end();
    }
}

export { verifiJWT };