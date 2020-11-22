create table books (
  id SERIAL PRIMARY KEY,
  title VARCHAR(255),
  ISBN VARCHAR(128),
  author VARCHAR(255)
);

create table authors (
  id SERIAL PRIMARY KEY,
  firstname VARCHAR(255),
  lastname VARCHAR(255)
);

create table books_authors (
  book_id INTEGER NOT NULL REFERENCES books(id),
  author_id INTEGER NOT NULL REFERENCES authors(id)
);

SELECT * FROM authors INNER JOIN (SELECT * FROM books INNER JOIN books_authors ON books.id = books_authors.book_id) as books_authors ON authors.id=books_authors.author_id;
