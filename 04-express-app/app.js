const express = require("express")
const app = express()
const PORT = 3000
// import router module from author.js
const authorRoute = require("./routers/authors")

app.use("/authors", authorRoute)


app.listen(PORT, () => {
    console.log(`The app is listening on http://localhost:${PORT}`)
})