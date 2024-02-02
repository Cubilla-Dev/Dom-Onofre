const express = require('express')
const routerRegister = express.Router()
const sesion = require('../controllers/sesion.controller')
const { validateData } = require('../validators/sesion.validator')


/** POST Methods */
    /**
     * @openapi
     * '/api/register':
     *  post:
     *     tags:
     *     - User Controller
     *     summary: User register
     *     requestBody:
     *      required: true
     *      content:
     *        application/json:
     *           schema:
     *            type: object
     *            required:
     *              - name
     *              - last_name
     *              - email
     *              - password
     *            properties:
     *              name:
     *                type: string
     *                default: John
     *              last_name:
     *                type: string
     *                default: Doe
     *              email:
     *                type: string
     *                default: johndoe@mail.com
     *              password:
     *                type: string
     *                default: johnDoe20!@
     *     responses:
     *      200:
     *        description: Successful session
     *      409:
     *        description: Conflict
     *      500:
     *        description: Server Error
     */
routerRegister.post('/api/register', validateData, sesion.register)
// router.get('/alldata', sesion.allUser)


module.exports = routerRegister;