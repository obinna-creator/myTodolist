const express= require("express")
const multerRouters= require("./multerRouters/mymulterrouter")
require('./config')
const app = express()
const port = 4000
app.use(express.json())
app.use("/api/v1/user", multerRouters)
app.use('/myupload', express.static('myupload'))





app.listen(port, () => {
    console.log(`server is listening on port:${port}`)
})