const { graphqlHTTP } = require("express-graphql");
const { makeExecutableSchema } = require("graphql-tools");
const { readFileSync } = require("fs");
const { PORT } = require("./setting");
const { join } = require("path");
const graphQLResolvers = require("./lib/graphql/resolvers");
const express = require("express");
const app = express();
require("./db");

// Reading GraphQL Schema
const schema = readFileSync(
	join(__dirname, "lib", "graphql", "schema.graphql"),
	"utf-8",
);

const grapqhQLSchema = makeExecutableSchema({
	typeDefs: schema,
	resolvers: graphQLResolvers,
});

// Inicialization & Middlewares
app.use(
	"/graphql",
	graphqlHTTP({
		schema: grapqhQLSchema,
		rootValue: graphQLResolvers,
		graphiql: true,
	}),
);

//  Listening
app.listen(PORT, () => console.log(`http://localhost:${PORT}/graphql`));
