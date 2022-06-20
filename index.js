// create an express app
const express = require("express")
const app = express()

// use the express-static middleware
app.use(express.static("layouts"))

// define the first route

// start the server listening for requests
app.listen(process.env.PORT || 3003, 
	() => console.log("Server is running..."));