const express = require('express')
const app = express()
const config = require('./config')
require('./src/config/mongoose.config')
const morgan = require('morgan')

const { swaggerDocs } = require('./src/config/configSwagger')

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