const express = require("express")
const mongoose= require("mongoose")

const dotenv = require("dotenv")
const router = require("./schoolRouter/schoolrouter")
const scorerouter= require('./schoolRouter/scorerouter')
const port = 8000
const app= express()
app.use(express.json())


//app.use('/api/v1/user', router)
app.use(router)
app.use(scorerouter)
dotenv.config()

const DBLink = process.env.DBLink
mongoose.connect(DBLink).then(() => {
    console.log("connected successfully");
}).catch((err) => {
    console.log(`unable to connect to ${err.message}`);
})

app.listen(port, () => {
    console.log(`server is listening on port :${port}`);
})
