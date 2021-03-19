const mongoose = require('mongoose')
const { URI } = require('./setting')

mongoose
    .connect(URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
        .then(() => console.log(`[DB] Conectada con exito!`))
        .catch(err => console.error(`[DB] ${err}`));
