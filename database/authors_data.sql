-- authors table
insert into authors(firstname, lastname) values ('Alessandro', 'D''Avenia');
insert into authors(firstname, lastname) values ('Kyle', 'Simpsons');
insert into authors(firstname, lastname) values ('Daniel', 'Khaneman');

-- books_authors table
insert into books_authors(book_id, author_id) values (1, 1);
insert into books_authors(book_id, author_id) values (2, 2);
insert into books_authors(book_id, author_id) values (3, 3);
insert into books_authors(book_id, author_id) values (4, 1);

SELECT
  "book"."id" AS "id",
  "book"."title" AS "title",
  "author"."id" AS "author__id",
  "author"."firstname"
FROM books "book"
LEFT JOIN books_authors "books_auth" ON "book".id = "books_auth".book_id
LEFT JOIN authors "author" ON "books_auth".author_id = "author".id
WHERE "book".id = 3;