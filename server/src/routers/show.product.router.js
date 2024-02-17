const express = require('express')
const routerShowProduct = express.Router()
const product = require('../controllers/product.controller')

routerShowProduct.get('/product/:prod_id', product.showProduct);


module.exports = routerShowProduct;