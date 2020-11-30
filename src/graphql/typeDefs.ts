import { gql } from "apollo-server-express";

const typeDefs = gql`
  type Query {
    allBooks: [Book]
    book(id: ID): Book
  }

  type Book {
    id: ID
    title: String!
    yearOfPublishment: Int!
    ISBN: String!
    authors: [Author!]
  }

  type Author {
    id: ID!
    firstname: String
    lastname: String
  }
`;

export default typeDefs;
