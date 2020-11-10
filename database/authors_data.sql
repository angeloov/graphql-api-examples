-- authors table
insert into authors(firstname, lastname) values ('Alessandro', 'D''Avenia');
insert into authors(firstname, lastname) values ('Kyle', 'Simpsons');
insert into authors(firstname, lastname) values ('Daniel', 'Khaneman');

-- books_authors table
insert into books_authors(book_id, author_id) values (1, 1);
insert into books_authors(book_id, author_id) values (2, 2);
insert into books_authors(book_id, author_id) values (3, 3);
insert into books_authors(book_id, author_id) values (4, 1);