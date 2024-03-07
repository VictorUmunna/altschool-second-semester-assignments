const express = require("express")
const bodyParser = require( "body-parser" )
const morgan = require( 'morgan' );  

// import router module from author.js
const authorRoute = require("./routers/authors")

const app = express()
const PORT = 3000

app.use(express.static('public'))
app.use(bodyParser.json())
app.use(morgan('dev'))

app.use("/authors", authorRoute)

app.get( "/", (req, res)=> {
    res.end("Home Page")
})


app.listen(PORT, () => {
    console.log(`The app is listening on http://localhost:${PORT}`)
})