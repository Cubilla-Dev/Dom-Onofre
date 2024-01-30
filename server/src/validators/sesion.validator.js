const { check } = require('express-validator')
const { validateResult } = require('../helpers/validator.helpers')

const validateData = [
    check('email')
    .exists() // si existe 
    .not()
    .isEmpty() //que no sea vacio 
    .isEmail(),
    check('password')
    .isLength({ min: 5})
    .not()
    .isEmpty()
    .exists(),
    // .custom((value, { req }) => {  //esto es una validacion personalizada 
    //     //haces los calculos que quieres para que pase 
    //     return true   //esto apra que pase nomas ya
    //     //TODO: devolver throw para cuando se no se cumpla lo que dices 
    //     //? EJEMPLO: throw new Error('mensaje')
    // })
    (req, res, next) => {
        validateResult( req, res, next )
    }
]

module.exports = { validateData }