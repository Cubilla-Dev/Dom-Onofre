const axios = require('axios');
const config = require('../../config')

const createDebt = async (req, res) => {

    const { idDeuda, valor, label,  } = req.body;

    //const idDeuda = "demo005";
    const siExiste = "update";
    const apiKey = "ap-da0cd81ca32bcc0ea26cf10c";
    //const host = "staging.adamspay.com";
    //const path = "/api/v1/debts";

    // const inicio_validez = new Date().toISOString();
    const inicio_validez = new Date();
    const fechaSinMilisegundos = inicio_validez.toISOString().slice(0, -5);
    const fechaConOffset = fechaSinMilisegundos + '+00:00'

    // const fin_validez = new Date(new Date().getTime() + 2 * 24 * 60 * 60 * 1000).toISOString();
    const fin_validez = new Date(new Date().getTime() + 2 * 24 * 60 * 60 * 1000)
    const fechaSinMilisegundosEnd = fin_validez.toISOString().slice(0, -5);
    const fechaConOffsetEnd = fechaSinMilisegundosEnd + '+00:00'

    const deuda = {
        "docId": idDeuda,
        "amount": { "currency": "PYG", "value": `${valor}` },
        "label": `${label}`,
        "validPeriod": {
            "start": fechaConOffset,
            "end": fechaConOffsetEnd
        }
    };

    const post = { "debt": deuda };

    const headers = {
        'apikey': config.api.apiKey,
        'Content-Type': 'application/json',
        'x-if-exists': siExiste
    }

    try {
        const response = await axios.post(`https://${config.api.host_api}${config.api.path_api}`, post, { headers });

        const responseData = response.data;
        if (responseData.debt) {
            const debt = responseData.debt;
            console.log("Deuda creada exitosamente");
            console.log("URL=" + debt.payUrl);
            res.status(200).json({ message: "Deuda creada exitosamente", payUrl: debt.payUrl });
        } else {
            console.log("# Error");
            if (responseData.meta) {
                console.log(responseData.meta);
            }
            res.status(500).json({ error: "Error al crear la deuda" });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Error al realizar la solicitud" });
    }
};

module.exports = { createDebt };
