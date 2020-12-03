import joinMonster from "join-monster";
import { PrismaClient } from "@prisma/client";
import { createRequest } from "graphql-tools";
const prisma = new PrismaClient();

interface Author {
  id: number;
  firstname: string;
  lastname: string;
}

export default {
  Query: {
    allBooks(parent: any, args: any, ctx: any, resolveInfo: any) {
      return joinMonster(resolveInfo, ctx, async (sql: any) => {
        console.log(sql);
        return await prisma.$queryRaw(sql);
      });
    },
    book(parent: any, args: any, ctx: any, resolveInfo: any) {
      return joinMonster(resolveInfo, ctx, async (sql: any) => {
        console.log(sql);
        return await prisma.$queryRaw(sql);
      });
    },
  },
  Mutation: {
    async addBook(parent: any, args: any, ctx: any, resolveInfo: any) {
      const listOfAuthors: Array<Author> = [];

      // Check if author doesn't exist in db
      args.authors.forEach(async (author: any) => {
        const res = await prisma.authors.findFirst({
          where: {
            firstname: author.firstname,
            lastname: author.lastname,
          },
        });

        if (!res) {
          return {
            status: 422, // The request body was incorrect
            success: false,
            message: "The author provided doesn't exist in database",
          };
        }

        listOfAuthors.push(res as Author);
      });

      const createdBook = await prisma.books.create({
        data: {
          title: args.title,
          year: args.yearOfPublishment,
          isbn: args.ISBN,
        },
      });

      listOfAuthors.forEach(async (author: any) => {
        console.log(author);
        await prisma.$queryRaw(
          `INSERT INTO books_authors(book_id, author_id) VALUES (${createdBook.id}, ${author.id})`
        );
      });

      // Return the created book
      return {
        status: 200,
        success: true,
        message: "Book created",
        data: {
          id: createdBook.id,
          title: createdBook.title,
          yearOfPublishment: createdBook.year,
          ISBN: createdBook.isbn,
          authors: listOfAuthors,
        },
      };
    },
  },
};
