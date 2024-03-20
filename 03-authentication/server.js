const http = require('http');
const fs = require('fs');
const path = require('path');

const { authenticate } = require("./authentication")

const booksDbPath = path.join(__dirname, "db", 'books.json');
const authorsDbPath = path.join(__dirname, "db", 'authors.json');
let booksDB = [];
let authorDB = [];

const PORT = 4000
const HOST_NAME = 'localhost'



// Create server
const server = http.createServer(requestHandler)

server.listen(PORT, HOST_NAME, () => {
    booksDB = JSON.parse(fs.readFileSync(booksDbPath, 'utf8'));
    console.log(`Server is listening on ${HOST_NAME}:${PORT}`)
})