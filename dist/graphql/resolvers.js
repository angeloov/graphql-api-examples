"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var resolvers = {
    Query: {
        books: function () {
            return [
                {
                    title: "Ciaone",
                    yearOfPublishment: 1999,
                    ISBN: 9832897478945,
                    author: "Gianni Guittone",
                },
                {
                    title: "Ficone",
                    yearOfPublishment: 3844,
                    ISBN: 9832897478945,
                    author: "Gianni Guittone",
                },
                {
                    title: "Ciaone",
                    yearOfPublishment: 2005,
                    ISBN: 9832897478945,
                    author: "Gianni Guittone",
                },
                {
                    title: "Asdasjidijsd",
                    yearOfPublishment: 2021,
                    ISBN: 9832897478945,
                    author: "Dante Alighieri",
                },
                {
                    title: "Ciaone",
                    yearOfPublishment: 1950,
                    ISBN: 9832897478945,
                    author: "Gianni Marchigiani",
                },
            ];
        },
    },
};
exports.default = resolvers;
