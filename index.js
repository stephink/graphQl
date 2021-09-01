const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const { resolvers } = require('./resolver');
const { schema } = require('./schema');

const app = express();

const root = resolvers;

app.use('/graphQl', graphqlHTTP({
    schema: schema,
    graphiql: true,
    rootValue: root
}));


app.listen(8082, () => {
    console.log("prot is connected")
});
