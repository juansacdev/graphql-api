const {
    graphql,
    buildSchema,
} = require('graphql')
const express = require('express')
const { graphqlHTTP } = require('express-graphql')
const { PORT } = require('../setting')
const app = express()

// GraphQL Schema
const grapqhQLSchema = buildSchema(`
    type Query {
        hello: String
        saludo: String
    }
`)

// Setting Resolvers
const graphQLResolvers = {

    hello: () => {
        return 'Hola mundo con GraphQL'
    },

    saludo: () => {
        return 'Hola a todos desde GraphQL'
    }
}

// Inicialization & Middlewares
app.use('/', graphqlHTTP({
    schema: grapqhQLSchema,
    rootValue: graphQLResolvers,
    graphiql: true,
}))

// Query Execution
graphql(grapqhQLSchema, `{
    hello,
    saludo
}`, graphQLResolvers)
    .then(data => console.log(data))

//  Listening
app.listen(PORT, () => console.log(`http://localhost:${PORT}`))
