const swaggerJsdoc = require('swagger-jsdoc')
const swaggeruUi = require('swagger-ui-express')

const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'Mi Api',
            contact: {
                name: "Desmond Obisi",
                email: "info@miniblog.com",
                url: "https://github.com/DesmondSanctity/node-js-swagger"
            },
            version: '1.0.0',
        },
    },
    apis: ['./src/routers/*.js', './src/controllers/*.js'],
};

const specs = swaggerJsdoc(options)


const swaggerDocs = ( app, port ) => {
    app.use('/api/docs', swaggeruUi.serve, swaggeruUi.setup(specs))
    app.get('/api/docs.json', (req, res) => {
        res.setHeader("Content-Type", "applications/json");
        res.send(swaggerJsdoc)
    });

    console.log(
        `Version 1 de la documentacion  al http://localhost:${port}/api/docs`
    )
}


module.exports = { swaggerDocs }


