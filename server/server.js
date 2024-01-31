const express = require('express')
const app = express()
const config = require('./config')
require('./mongoose.config')
const morgan = require('morgan')
const router = require('./src/routers/sesion.router')

const { swaggerDocs } = require('./configSwagger')
const buildLogger = require('./logger')

//TODO: verificar mejor si esto esta bien 
//para guardar los logs
const logger = buildLogger('app.js');
logger.log('Hola mundo')
logger.error('Esto es algo malo')

app.use(express.json())
//para ver las peticiones que llega al server
app.use(morgan('dev'))
app.use(router)

app.listen(config.api.port, () => {
    console.log(`Server en linea en el port: ${config.api.port}`)
    //para la documentacion de los enpoints
    swaggerDocs(app, config.api.port)
})