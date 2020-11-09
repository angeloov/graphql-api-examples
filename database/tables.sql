create table books (
  id SERIAL PRIMARY KEY,
  title VARCHAR(255),
  ISBN VARCHAR(128),
  author VARCHAR(255)
);

insert into books(id, title, ISBN, author) values (1, 'Bianca come il latte rossa come il sangue', 873478934789, 'Alessandro DAvenia');