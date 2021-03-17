const { connect } = require('mongoose')
const { URI } = require('./setting')

const connectDb = async () => {

    try {

        await connect(URI, {
            useCreateIndex: true,
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
        })
        console.log(`[DB] Conectada con exito! Todo listo`)
    } catch (error) {
        console.error(`[DB] ${error}`)
    }

}

module.exports = connectDb
