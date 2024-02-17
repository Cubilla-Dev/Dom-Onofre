const ProductsDB = require('../models/product.controller')

const product = {
    addProduct: async (req, res) => {
        const {name_product, url_image, price, description} = req.body;
        try  {
            if(name_product & url_image & price & description){
                res.status(400).json({message: 'Es necesario todo los parametros'})
            }
            const newUser = new ProductsDB({ name_product, url_image, price, description })
            await newUser.save()
    
            res.status(200).send({ message: 'Producto agregado'})
        }catch( error ){
            res.status(500).json({ message: "Error del servidor"})
        }
    },
    allProduct: async (req, res) => {
        try{
            const data = await ProductsDB.find()

            res.status(200).json(data)
        }catch( error ){
            console.log("Error en la peticion de la data ", error)
        }
    },
    showProduct: async (req, res) => {
        const { prod_id } = req.params;
        console.log(prod_id);
        try {
            const data = await ProductsDB.findById(prod_id);
            console.log(data)
            res.status(200).json(data);
        } catch (error) {
            console.log("Error en la petición de la data ", error);
            res.status(500).json({ error: "Error en la petición de la data" });
        }
    }    
}

module.exports = product;