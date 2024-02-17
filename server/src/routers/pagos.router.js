const express = require('express')
const router = express.Router()
const {createDebt} = require('../controllers/create.debt.controller')


router.post('/create-debt', createDebt);


module.exports = router;