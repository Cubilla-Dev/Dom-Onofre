const https = require('https');

const idDeuda = "demo001";
const siExiste = "update";
const apiKey = "7b1ed25989bed08d7f5f6c279166deea";
const host = "staging.adamspay.com";
const path = "/api/v1/debts";

// Hora DEBE ser en UTC
const inicio_validez = new Date().toISOString();
const fin_validez = new Date(new Date().getTime() + 2 * 24 * 60 * 60 * 1000).toISOString();

// Crear modelo de la deuda
const deuda = {
    "docId": idDeuda,
    "amount": { "currency": "PYG", "value": "50000" },
    "label": "Aporte camiseta del equipo",
    "validPeriod": {
        "start": inicio_validez,
        "end": fin_validez
    }
};

// El post debe llevar la deuda en la propiedad "debt"
const post = { "debt": deuda };

// Crear JSON
const payload = JSON.stringify(post);

const options = {
    hostname: host,
    path: path,
    method: 'POST',
    headers: {
        'apikey': apiKey,
        'Content-Type': 'application/json',
        'x-if-exists': siExiste
    }
};

const req = https.request(options, (res) => {
    let data = '';
    res.on('data', (chunk) => {
        data += chunk;
    });
    res.on('end', () => {
        const response = JSON.parse(data);
        if (response.debt) {
            const debt = response.debt;
            console.log("Deuda creada exitosamente");
            console.log("URL=" + debt.payUrl);
        } else {
            console.log("# Error");
            if (response.meta) {
                console.log(response.meta);
            }
        }
    });
});

req.on('error', (error) => {
    console.error(error);
});

req.write(payload);
req.end();
