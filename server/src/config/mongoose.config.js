const mongoose = require('mongoose');
const config = require('../../config')

mongoose.set("strictQuery", false)
mongoose.connect(`${config.db.url_db}`)
    .then(()=> console.log('Coneccion exitosa con la DB'))
    .catch(err => console.log('Ocurrio un error en la conexion con la base de datos ', err))