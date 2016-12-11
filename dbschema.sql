DROP DATABASE IF EXISTS simpbuksto;
CREATE DATABASE simpbuksto;

\c simpbuksto

DROP TABLE IF EXISTS books;
CREATE TABLE books(
  id SERIAL PRIMARY KEY,
  title VARCHAR(255),
  author VARCHAR(255),
  category VARCHAR(255),
  favorite BOOLEAN DEFAULT FALSE
);

INSERT INTO books (title, author, category)
VALUES('Parable of the Sower', 'Octavia Butler', 'Dystopian Science Fiction'), ('Parable of the Talents', 'Octavia Butler', 'Dystopian Science Fiction'),('The Female Man', 'Joanna Russ', 'Feminist Science Fiction'),('Midnight Robber', 'Nalo Hopkinson', 'Feminist Science Fiction'),('The Snow Queen', 'Joan D Vinge', 'Feminist Science Fiction'),('Woman on the Edge of Time', 'Marge Piercy', 'Feminist Science Fiction'),('Memoirs of a Space Woman', 'Naomi Mitchison', 'Feminist Science Fiction '),('Dawn', 'Octavia Butler', 'Feminist Science Fiction'),('Dune', 'Frank Herbert', 'Science Fiction'),('The Book of the New Sun', 'Gene Wolfe', 'Science Fiction'), ('The Moon Is a Harsh Mistress', 'Robert A Heinlein', 'Science Fiction'),('The Dispossessed', 'Ursula K Le Guin', 'Science Fiction'),('Hyperion', 'Dan Simmons', 'Science Fiction'),('Neuromancer', 'William Gibson', 'Science Fiction'),('The Stars My Destination', 'Alfred Bester', 'Science Fiction'),('The Man in the High Castle', 'Philip K Dick', 'Science Fiction'),('Use of Weapons', 'Iain M Banks', 'Science Fiction'),('The Foundation Trilogy', 'Isaac Asimov', 'Science Fiction'),('2001:A Space Odyssey', 'Arthur C Clarke', 'Science Fiction'), ('The Forever War', 'Joe Haldeman', 'Science Fiction'), ('Confessions', 'Augustine', 'Non Fiction'), ('The Interpretation of Dreams', 'Sigmund Freud', 'Non Fiction')     
