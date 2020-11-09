export default {
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
