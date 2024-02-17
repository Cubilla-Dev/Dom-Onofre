const Sales = require('../models/sales.models')


const webHook = async (req, res) => {
    const { notify, debt } = req.body

    if(notify && debt){
        const { status } = debt.payStatus;
        const { label, docId, paid } = debt;

        console.log('los datos obtenidos de la pasarela de pagos: ', status, paid, label, docId)
        
        const newSale = new Sales({ id: docId, product: label, price: paid, status: status })
        
        try{
            await newSale.save()
            console.log('datos guardados en la db: ', newSale)
        }
        catch(err){
            console.log('No se pudo guardar ls datos ', err)
        }

        console.log(JSON.stringify({ notify, debt }, null, 2));
        res.status(200).json({message: 'datos recibidos'})
    }else{
        res.status(400).json({message: 'Error al recibir los datos'})
    }
}

module.exports = {webHook};