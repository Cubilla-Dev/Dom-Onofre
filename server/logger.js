const winston = require('winston')
const { combine, timestamp, json } = winston.format;


const logger = winston.createLogger({
    level: 'error', // Nivel de registro: error
    format: combine(
        timestamp(),
        json()
    ),
    defaultMeta: { service: 'tu-aplicacion' },
    transports: [
      // Transporte para guardar en un archivo
        new winston.transports.File({ filename: 'errores.log', level: 'error' }),
    ],
});




module.exports = function buildLogger(service){

    return {
        log: (message) => {
            logger.log('info', {message, service})
        },
        error: (message) => {
            logger.error("error", {message, service})
        }
    }
}