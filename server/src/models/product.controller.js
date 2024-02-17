const mongoose = require('mongoose')

const ProductSchema = new mongoose.Schema({
    name_product: {
        type: String, 
        require: true
    },
    url_image: {
        type: String, 
        require: true
    },
    price: {
        type: String, 
        require: true
    },
    description: {
        type: String, 
        require: true
    }
}, {
    timestamps: true
})

const ProductsDB = mongoose.model("Product", ProductSchema);

module.exports = ProductsDB;
