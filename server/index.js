const express = require('express')
const app = express()
const config = require('./config')
const cors = require("cors")
const morgan = require('morgan')

//routers
const router = require('./src/routers/pagos.router')
const routerHook = require('./src/routers/webhook.router')
const routerShowSale = require('./src/routers/show.sale.router')
const routerAddProduct = require('./src/routers/add.product.router')
const routerShowProduct = require('./src/routers/show.product.router')
const routerAllProduct = require('./src/routers/all.product.router')

//DB
require('./src/config/mongoose.config')

//middleware
app.use(express.json())
app.use(morgan('dev'))
const corsOptions = {
    origin:  config.api.host_cors, 
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
    optionsSuccessStatus: 204,
};

app.use(cors(corsOptions));
//usando router
app.use(router)
app.use(routerHook)
app.use(routerShowSale)
app.use(routerAddProduct)
app.use(routerShowProduct)
app.use(routerAllProduct)
app.get('/', (req, res) => {
    res.send('Server en linea')
})

app.listen(config.api.port, () => {
    console.log(`Server en linea en el port: ${config.api.port}`)
})