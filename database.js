'use strict';
const databaseName = 'simpbuksto'
const connectionString = process.env.DATABASE_URL || `postgres://${process.env.USER}@localhost:5432/${databaseName}`
const pgp = require('pg-promise')()
const database = pgp(connectionString)

const getAllBooks = () => {
  const sql = 'SELECT * FROM books'

  return database.any(sql)
}

const createBook = (title, author, category) => {
  const sql = 'INSERT INTO books (title, author, category) VALUES ($1, $2, $3) RETURNING *'

  return database.one(sql, [title, author, category] )
}

const getBookById = (book_id) => {
  const sql = 'SELECT * FROM books WHERE books.id = $1'

  return database.one(sql, [book_id])
}

const findBooks = (options) => {
  const sql = 'SELECT * FROM books WHERE LOWER(title) LIKE $1 OR LOWER(author) LIKE $1 OR LOWER(category) LIKE $1'

  let variables = []
  {
    let q = options.q
      .toLowerCase()
      .replace(/^*/, '%')
      .replace(/ *$/, '%')
      .replace(/ +/g, '%')

    variables.push(q)

  return database.any(sql, variables)
  }
}

const deleteBookById = (id) => {
  const sql = 'DELETE FROM books WHERE id = $1'

  return database.none(sql, [id])
}


module.exports = {
  getAllBooks,
  createBook,
  getBookById,
  findBooks,
  deleteBookById
}
