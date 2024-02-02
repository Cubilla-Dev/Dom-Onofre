const mongoose = require('mongoose');
const config = require('../../config')

mongoose.set("strictQuery", false)
mongoose.connect(`mongodb://127.0.0.1:/${config.db.host}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(()=> console.log('Coneccion exitosa con la DB'))
    .catch(err => console.log('Ocurrio un error en la conexion con la base de datos ', err))