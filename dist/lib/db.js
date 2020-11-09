"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var pg_1 = require("pg");
exports.default = new pg_1.Pool({
    user: "angelo",
    host: "localhost",
    database: "library",
    password: null,
    port: 5432,
});
