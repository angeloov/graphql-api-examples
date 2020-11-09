export default {
  Query: {
    fields: {
      book: {
        where: (table: string, args: any) => `${table}.id = ${args.id}`,
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
