const { graphql, buildSchema } = require('graphql')
const express = require('express')
const { graphqlHTTP } = require('express-graphql')
const { readFileSync } = require('fs')
const { join } = require('path')
const resolvers = require('./lib/resolvers')

// inicializamos express en una app
const app = express()
const port = 3000



// Definimos el schema inical
const schema = buildSchema (
    readFileSync(
        join(__dirname, 'lib', 'schema.graphql'), 'utf-8'
    )
)


// Definimos el endpoin y usamos el middleware
app.use('/api', graphqlHTTP({
    schema: schema,
    rootValue: resolvers,
    graphiql: true,
}))


app.listen(port, () =>
    console.log(
        `Server is listening at http://localhost:${port}/api`
    )
)


/*
// Ejecutamos el Query hello y saludo

// graphql(schema, '{ hello, saludo }', resolvers)
//     .then(data => console.log(data))
 */