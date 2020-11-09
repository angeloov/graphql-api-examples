"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var apollo_server_1 = require("apollo-server");
var join_monster_graphql_tools_adapter_1 = __importDefault(require("join-monster-graphql-tools-adapter"));
var graphql_tools_1 = require("graphql-tools");
var joinMonsterMetadata_1 = __importDefault(require("./graphql/joinMonsterMetadata"));
var typeDefs_1 = __importDefault(require("./graphql/typeDefs"));
var resolvers_1 = __importDefault(require("./graphql/resolvers"));
var schema = graphql_tools_1.makeExecutableSchema({
    typeDefs: typeDefs_1.default,
    resolvers: resolvers_1.default,
});
join_monster_graphql_tools_adapter_1.default(schema, joinMonsterMetadata_1.default);
var server = new apollo_server_1.ApolloServer({ schema: schema });
// The `listen` method launches a web server.
server.listen().then(function (_a) {
    var url = _a.url;
    console.log("\uD83D\uDE80 Server ready at " + url);
});
