import { ApolloServer } from "apollo-server";
/* import express, { Application } from "express";
const app: Application = express(); */

import typeDefs from "./graphql/typeDefs";
import resolvers from "./graphql/resolvers";

const server = new ApolloServer({ typeDefs, resolvers });

// The `listen` method launches a web server.
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
