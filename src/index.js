const { graphqlHTTP } = require('express-graphql')
const { buildSchema } = require('graphql')
const { readFileSync } = require('fs')
const { PORT } = require('./setting')
const { join } = require('path')
const graphQLResolvers = require('./lib/resolvers')
const express = require('express')
const app = express()

// Reading GraphQL Schema
const grapqhQLSchema = buildSchema(
    readFileSync(
        join(__dirname, 'lib', 'schema.graphql'),
        'utf-8'
    )
)

// Inicialization & Middlewares
app.use('/', graphqlHTTP({
    schema: grapqhQLSchema,
    rootValue: graphQLResolvers,
    graphiql: true,
}))

//  Listening
app.listen(PORT, () => console.log(`http://localhost:${PORT}`))
