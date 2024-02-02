const express = require('express')
const app = express()
const config = require('./config')
require('./src/config/mongoose.config')
const morgan = require('morgan')

const { swaggerDocs } = require('./src/config/configSwagger')

const buildLogger = require('./logger')

//TODO: verificar mejor si esto esta bien 
//para guardar los logs
const logger = buildLogger('app.js');
logger.log('Hola mundo')
logger.error('Esto es algo malo')

//router
const routerLogin = require('./src/routers/login.router')
const routerRegister = require('./src/routers/register.router')


app.use(express.json())
app.use(morgan('dev'))

//usando router
app.use(routerLogin)
app.use(routerRegister)

app.listen(config.api.port, () => {
    console.log(`Server en linea en el port: ${config.api.port}`)
    swaggerDocs(app, config.api.port)
})