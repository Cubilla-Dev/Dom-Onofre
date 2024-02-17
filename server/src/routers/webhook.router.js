const express = require('express')
const routerHook = express.Router()
const {webHook} = require('../controllers/webhook.controller')

routerHook.post('/webhook', webHook);


module.exports = routerHook;