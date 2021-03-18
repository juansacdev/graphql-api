const { connect, connection, } = require('mongoose')
const { URI } = require('./setting')

connect(URI, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
})
    .then(() => console.log(`[DB] Conectada con exito!`))
    .catch(err => console.log(`[DB] ${err}`));

