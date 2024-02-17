const express = require('express')
const routerShowSale = express.Router()
const {showSale} = require('../controllers/show.sale.controller')

routerShowSale.get('/showsale/:doc_id', showSale);


module.exports = routerShowSale;