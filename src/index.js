const {
    graphql,
    buildSchema,
} = require('graphql')
require('dotenv').config()
const express = require('express')
const { graphqlHTTP } = require('express-graphql')
const app = express()
const port = process.env.PORT


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

//  Listening
app.listen(port, () => console.log(`
    http://localhost:${port}
`))

// Query Execution
graphql(grapqhQLSchema, `{
    hello,
    saludo
}`, graphQLResolvers)
    .then(data => console.log(data))