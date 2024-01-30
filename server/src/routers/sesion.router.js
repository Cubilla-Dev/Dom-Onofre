const express = require('express')
const router = express.Router()
const sesion = require('../controllers/sesion.controller')
const { validateData } = require('../validators/sesion.validator')

router.post('/login', validateData, sesion.login)
router.post('/register', validateData, sesion.register)
router.get('/alldata', sesion.allUser)


module.exports = router;