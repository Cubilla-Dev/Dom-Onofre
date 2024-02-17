const mongoose = require('mongoose')

const SaleSchema = new mongoose.Schema({
    id: {
        type: String,
        required: true,
        unique: true 
    },
    product: {
        type: String, 
        require: true
    },
    price: {
        type: String, 
        require: true
    },
    status: {
        type: String, 
        require: true
    }
}, {
    timestamps: true
})

const Sales = mongoose.model("Sale", SaleSchema);

module.exports = Sales;
