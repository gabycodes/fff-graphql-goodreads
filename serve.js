const express = require('express') // npm install --save express
const graphqlHTTP = require('express-graphql') // plugin to create a graphql endpoint
const app = express()
const schema = require('./schema')
// --save graphql

// node serve.js to start this process

app.use('/graphql', graphqlHTTP ({
  schema, //we have to define a schema for it to work
  graphiql: true
}))

app.listen(4000)
console.log('Listening...');
