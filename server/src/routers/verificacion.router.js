const express = require('express')
const routerVerificar = express.Router()


routerVerificar.get('/', (req, res)=>{
    res.send('funciona')
})


module.exports = routerVerificar;