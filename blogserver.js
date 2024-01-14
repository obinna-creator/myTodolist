const express= require("express")

const blogRouter = require("./blogrouters/blogRouter")
const commentrouter= require("./blogrouters/commentrouter")
require('./config')
const app= express()
const port= 3000


app.use(express.json())
app.use("/api/v1/user",blogRouter)
app.use("/api/v1/user",commentrouter)

app.listen(port, () => {
    console.log(`server is listening on port:${port}`);
})