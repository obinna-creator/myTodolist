const express = require("express")
const bloggersrouter= require("./bloggersRouter/bloggersrouter")

require('./config')
const app= express()
const port = 4000

app.use("/api/v2/user",bloggersrouter)

app.listen(port, () => {
    console.log(`server is listening on port:${port}`)
} )