"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var apollo_server_1 = require("apollo-server");
/* import express, { Application } from "express";
const app: Application = express(); */
var typeDefs_1 = __importDefault(require("./graphql/typeDefs"));
var resolvers_1 = __importDefault(require("./graphql/resolvers"));
var server = new apollo_server_1.ApolloServer({ typeDefs: typeDefs_1.default, resolvers: resolvers_1.default });
// The `listen` method launches a web server.
server.listen().then(function (_a) {
    var url = _a.url;
    console.log("\uD83D\uDE80  Server ready at " + url);
});
