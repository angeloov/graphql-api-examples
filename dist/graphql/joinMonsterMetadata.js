"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    Book: {
        sqlTable: "books",
        uniqueKey: "id",
        fields: {
            title: {
                sqlColumn: "title",
            },
            author: {
                sqlColumn: "author",
            },
            ISBN: {
                sqlColumn: "isbn",
            },
            yearOfPublishment: {
                sqlColumn: "year",
            },
        },
    },
};
