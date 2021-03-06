export default {
  Query: {
    fields: {
      book: {
        where: (table: string, args: any) => `${table}.id = ${args.id}`,
      },
    },
  },
  Author: {
    sqlTable: "authors",
    uniqueKey: "id",
    fields: {
      firstname: {
        sqlColumn: "firstname",
      },
      lastname: {
        sqlColumn: "lastname",
      },
      fullname: {
        sqlDeps: ["firstname", "lastname"], // It depends on these columns
        resolve: (author: any) => `${author.firstname} ${author.lastname}`, // Compute the lastname
      },
    },
  },
  Book: {
    sqlTable: "books",
    uniqueKey: "id",
    fields: {
      title: {
        sqlColumn: "title",
      },
      ISBN: {
        sqlColumn: "isbn",
      },
      yearOfPublishment: {
        sqlColumn: "year",
      },
      authors: {
        junction: {
          // name the table that holds the two foreign keys
          sqlTable: "books_authors",
          sqlJoins: [
            // first the parent table to the junction
            (bookTable: string, junctionTable: string) =>
              `${bookTable}.id = ${junctionTable}.book_id`,
            // then the junction to the child
            (junctionTable: string, authorTable: string) =>
              `${junctionTable}.author_id = ${authorTable}.id`,
          ],
        },
      },
    },
  },
};
