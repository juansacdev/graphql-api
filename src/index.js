const { graphqlHTTP } = require('express-graphql')
const { makeExecutableSchema } = require('graphql-tools')
const { readFileSync } = require('fs')
const { PORT } = require('./setting')
const { join } = require('path')
const graphQLResolvers = require('./lib/resolvers')
const express = require('express')
const { type } = require('os')
const app = express()

// Reading GraphQL Schema
const schema = readFileSync (
    join(__dirname, 'lib', 'schema.graphql'),
    'utf-8'
)
const grapqhQLSchema = makeExecutableSchema({
    typeDefs: schema,
    resolvers: graphQLResolvers,
})

// Inicialization & Middlewares
app.use('/', graphqlHTTP({
    schema: grapqhQLSchema,
    rootValue: graphQLResolvers,
    graphiql: true,
}))

//  Listening
app.listen(PORT, () => console.log(`http://localhost:${PORT}`))
