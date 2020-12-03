import { gql } from "apollo-server";

const typeDefs = gql`
  type Query {
    allBooks: [Book]
    book(id: ID): Book
  }

  type Mutation {
    addBook(title: String, yearOfPublishment: Int, ISBN: String, authors: [AuthorInput]): addBookMutationResponse
  }

  interface MutationResponse {
    status: Int
    success: Boolean
    message: String
  }

  type addBookMutationResponse implements MutationResponse {
    status: Int
    success: Boolean
    message: String
    data: Book
  }

  input AuthorInput {
    firstname: String
    lastname: String
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
    fullname: String
  }
`;

export default typeDefs;
