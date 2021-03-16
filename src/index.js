const {
    graphql,
    buildSchema,
} = require('graphql')

// GraphQL Schema
const schema = buildSchema(`
    type Query {
        hello: String
        saludo: String
    }
`)

// Setting Resolvers
const resolvers = {

    hello: () => {
        return 'Hola mundo con GraphQL'
    },

    saludo: () => {
        return 'Hola a todos desde GraphQL'
    }
}

// Query Execution
graphql(schema, `{
    hello,
    saludo
}`, resolvers)
    .then(data => console.log(data))