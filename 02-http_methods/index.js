const http = require('http')

const hostname = 'localhost';
const port = 8000;


function requestHandler(req, res) {
    if (req.url === '/books' && req.method === 'GET') {
        res.end("This is the list of all books")
    }else if (req.url === '/books' && req.method === 'PUT'){
        res.end("The data of this book has been changed")
    }else if (req.url === '/books' && req.method === 'DELETE') {
        res.end("This book has been deleted")
    }else if (req.url === '/books/author' && req.method === 'GET') {
        res.end("This lists out the author of the books")
    }else if (req.url === '/books/author' && req.method === 'POST'){
        res.end("This book has been added to the database")
    }else if (req.url === '/books/author' && req.method === 'PUT'){
        res.send("The author of this book has been changed")
    }
}

const server = http.createServer(requestHandler)
server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
})