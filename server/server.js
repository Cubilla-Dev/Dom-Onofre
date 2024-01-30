const express = require('express')
const app = express()
const config = require('./config')
require('./mongoose.config')
const morgan = require('morgan')

const router = require('./src/routers/sesion.router')

app.use(express.json())
app.use(morgan('dev'))
app.use(router)

app.listen(config.api.port, () => console.log(`Server en linea en el port: ${config.api.port}`))