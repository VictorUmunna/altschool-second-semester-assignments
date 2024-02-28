const express = require("express")
const authorRouter = express.Router()

const authors = [
    {
      "name": "Agatha Christie",
      "id": 1,
      "year": 1890
    },
    {
      "name": "William Shakespeare",
      "id": 2,
      "year": 1564
    },
    {
      "name": "Harper Lee",
      "id": 3,
      "year": 1926
    },
    {
      "name": "J.R.R. Tolkien",
      "id": 4,
      "year": 1892
    },
    {
      "name": "George R.R. Martin",
      "id": 5,
      "year": 1948
    },
    {
      "name": "Jane Austen",
      "id": 6,
      "year": 1775
    },
    {
      "name": "Gabriel Garcia Marquez",
      "id": 7,
      "year": 1927
    },
    {
      "name": "Toni Morrison",
      "id": 8,
      "year": 1931
    },
    {
      "name": "Chimamanda Ngozi Adichie",
      "id": 9,
      "year": 1977
    },
    {
      "name": "Haruki Murakami",
      "id": 10,
      "year": 1949
    }
  ]

  

authorRouter.get('/authors', (req, res) => {
    res.json(authors)
    res.status(200)
})


module.exports = authorRouter