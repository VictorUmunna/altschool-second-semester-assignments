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

const requestHandler = async function (req, res) {
    res.setHeader("Content-Type", "application/json");

    if (req.url === '/books' && req.method === 'GET') {
        //authentication
        authenticate(req,res)
            .then(()=> {
                getAllBooks(req,res);
            }).catch((err)=> {
                res.writeHead(400)
                res.end(JSON.stringify ({
                    message :  err
                }))
            })
    } else if (req.url === '/books' && req.method === 'POST') {
        authenticate(req,res)
            .then(()=> {
                res.end('Book has been added to database');
            }).catch((err)=> {
                res.writeHead(400)
                res.end(JSON.stringify ({
                    message :  err
                }))
            })
    } else if (req.url === '/books' && req.method === 'PUT') {
        authenticate(req,res)
            .then(()=> {
                res.end('Book has been updated to the database');
            }).catch((err)=> {
                res.writeHead(400)
                res.end(JSON.stringify ({
                    message :  err
                }))
            })
    } else if (req.url === '/books' && req.method === 'PATCH') {
        authenticate(req,res)
            .then(()=> {
                res.end('Book has been partially updated to the database');
            }).catch((err)=> {
                res.writeHead(400)
                res.end(JSON.stringify ({
                    message :  err
                }))
            })
    } else if (req.url.startsWith('/books') && req.method === 'DELETE') {
        authenticate(req,res)
            .then(()=> {
                res.end('Book has been deleted from the database');
            }).catch((err)=> {
                res.writeHead(400)
                res.end(JSON.stringify ({
                    message :  err
                }))
            })

    } else {
        res.writeHead(404);
        res.end(JSON.stringify({
            message: 'Method Not Supported'
        }));
    }


    if (req.url === '/authors' && req.method === 'GET') {
        //authentication
        authenticate(req,res)
            .then(()=> {
                getAllAuthors(req,res);
            }).catch((err)=> {
                res.writeHead(400)
                res.end(JSON.stringify ({
                    message :  err
                }))
            })
    } else if (req.url === '/authors' && req.method === 'POST') { 
        authenticate(req,res)
            .then(()=> {
                res.end('Authors has been added to database');
            }).catch((err)=> {
                res.writeHead(400)
                res.end(JSON.stringify ({
                    message :  err
                }))
            })
    } else if (req.url === '/books' && req.method === 'PUT') {
        authenticate(req,res)
            .then(()=> {
                res.end('Author has been updated to database');
            }).catch((err)=> {
                res.writeHead(400)
                res.end(JSON.stringify ({
                    message :  err
                }))
            })
    } else if (req.url === '/books' && req.method === 'PATCH') {
        authenticate(req,res)
            .then(()=> {
                res.end('Author has been partially updated to database');
            }).catch((err)=> {
                res.writeHead(400)
                res.end(JSON.stringify ({
                    message :  err
                }))
            })     
    } else if (req.url.startsWith('/books') && req.method === 'DELETE') {
        authenticate(req,res)
            .then(()=> {
                res.end('Author has been deleted from database');
            }).catch((err)=> {
                res.writeHead(400)
                res.end(JSON.stringify ({
                    message :  err
                }))
            })
    } else {
        res.writeHead(404);
        res.end(JSON.stringify({
            message: 'Method Not Supported'
        }));
    }


}


const getAllBooks = function (req, res) {
    fs.readFile(booksDbPath, "utf8", (err, books) => {
        if (err) {
            console.log(err)
            res.writeHead(400)
            res.end("An error occured")
        }

        res.end(books);

    })
}

const getAllAuthors = function (req, res) {
    fs.readFile(authorsDbPath, "utf8", (err, authors) => {
        if (err) {
            console.log(err)
            res.writeHead(400)
            res.end("An error occured")
        }

        res.end(authors);

    })
}

// Create server
const server = http.createServer(requestHandler)

server.listen(PORT, HOST_NAME, () => {
    booksDB = JSON.parse(fs.readFileSync(booksDbPath, 'utf8'));
    console.log(`Server is listening on ${HOST_NAME}:${PORT}`)
})