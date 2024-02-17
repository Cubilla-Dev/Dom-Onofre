const Sales = require('../models/sales.models')

const showSale = async (req, res) => {
    const doc_id = req.params.doc_id;   
    console.log('se recibio el id: ', doc_id)
    try{
        const showData = await Sales.find({id: doc_id})
        if (showData) {
            console.log(showData)
            res.status(200).json( showData );
        } else {
            res.status(404).json({ message: 'Venta no encontrada' }); 
        }
    }
    catch(err){
        console.log('No se pudo obtener los datos ', err)
        res.status(500).json({message: 'Error del servidor'})
    }

}

module.exports = {showSale};