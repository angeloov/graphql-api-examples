import { ApolloServer } from "apollo-server";

import { makeExecutableSchema } from "graphql-tools";
import joinMonsterAdapt from "join-monster-graphql-tools-adapter";
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
server.listen().then(({ url }: any) => {
  console.log(`🚀 Server ready at ${url}`);
});
