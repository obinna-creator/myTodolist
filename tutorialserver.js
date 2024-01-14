const express = require("express")

const mongoose= require("mongoose")
const dotenv= require("dotenv")
const turorialauthrouter= require("./tutorialRouter/turorialauthrouter") 
const port = 2000
const app = express()
app.use(express.json())


app.use('/api/v1/users',turorialauthrouter)
dotenv.config()

const DBLink = process.env.DBLink
mongoose.connect(DBLink).then(() => {
    console.log("connected successfully");
}).catch((err) => {
console.log(`unable to connect to ${err.message}`)
})

app.listen(port, (req, res) => {
    console.log(` server is listenin on port: ${port}`)
})
