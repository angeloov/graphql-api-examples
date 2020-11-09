import { ApolloServer } from "apollo-server";

import joinMonsterAdapt from "join-monster-graphql-tools-adapter";
import { makeExecutableSchema } from "graphql-tools";
import joinMonsterMetadata from "./graphql/joinMonsterMetadata";

import typeDefs from "./graphql/typeDefs";
import resolvers from "./graphql/resolvers";

const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
});

joinMonsterAdapt(schema, joinMonsterMetadata);
const server = new ApolloServer({ schema });

// The `listen` method launches a web server.
server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
