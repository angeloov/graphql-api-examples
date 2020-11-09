import { gql } from "apollo-server";

const typeDefs = gql`
  type Query {
    allBooks: [Book]
    book(id: ID): Book
  }

  type Book {
    title: String!
    yearOfPublishment: Int!
    ISBN: String!
    author: String!
  }
`;

export default typeDefs;
