const { connect } = require("mongoose");
const { URI } = require("./setting");

connect(URI, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
	useFindAndModify: false,
})
	.then(() => console.log(`[DB] Conectada con exito!`))
	.catch((err) => console.error(`[DB] ${err}`));
