//create a simple server


//import http module
const http = require("http");

//create server
const server = http.createServer((req, res) => {
    res.end("My name is Victor Umunna")
})

server.listen(8900, null, null, () => {
    console.log('The Server is running on port 8900')
});