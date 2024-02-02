const express = require('express')
const routerLogin = express.Router()
const sesion = require('../controllers/sesion.controller')
const { validateData } = require('../validators/sesion.validator')


/**
 * @openapi
 * components:
 *   schemas:
 *     User:
 *       type: object
 *       required:
 *         - name
 *         - last_name
 *         - email
 *         - passwordhash
 *       properties:
 *         name:
 *           type: string
 *           example: Gustavo
 *         last_name:
 *           type: string
 *           example: Perez
 *         email:
 *           type: string
 *           format: email
 *           example: johndoe@mail.com
 *         passwordhash:
 *           type: string
 *           format: password
 *           example: bd4526534df7b33772c2f1ee26d97c39ff11379c8
 */

/** POST Methods */
    /**
     * @openapi
     * '/api/login':
     *  post:
     *     tags:
     *     - User Controller
     *     summary: User login
     *     requestBody:
     *      required: true
     *      content:
     *        application/json:
     *           schema:
     *            type: object
     *            required:
     *              - email
     *              - password
     *            properties:
     *              email:
     *                type: string
     *                default: johndoe@mail.com
     *              password:
     *                type: string
     *                default: johnDoe20!@
     *     responses:
     *      200:
     *        description: Successful session
     *      403:
     *        description: Forbidden
     *      401:
     *        description: Unauthorized
     *      500:
     *        description: Server Error
     */
routerLogin.post('/api/login', validateData, sesion.login)


module.exports = routerLogin;