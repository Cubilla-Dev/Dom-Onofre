const express = require('express')
const routerAllProduct = express.Router()
const product = require('../controllers/product.controller')


routerAllProduct.get('/allproduct', product.allProduct);


module.exports = routerAllProduct;