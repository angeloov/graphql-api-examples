import { ApolloServer } from "apollo-server-express";
import express from "express";

import { makeExecutableSchema } from "graphql-tools";
import joinMonsterAdapt from "join-monster-graphql-tools-adapter";
import joinMonsterMetadata from "./graphql/joinMonsterMetadata";

import typeDefs from "./graphql/typeDefs";
import resolvers from "./graphql/resolvers";

const app = express();

const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
});

joinMonsterAdapt(schema, joinMonsterMetadata);
const server = new ApolloServer({ schema });

server.applyMiddleware({ app });
app.listen(3000, () => console.log("Server started"));
