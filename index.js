const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const typeDefs = require('./src/schema');
const resolvers = require('./src/resolvers');

const app = express();

const server = new ApolloServer({ typeDefs, resolvers });
server.applyMiddleware({ app });

app.listen(3030);
