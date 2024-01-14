const express = require("express")
const familyRoutermulter= require("./familyRoutermulter/familyroutermulter")
require('./config')
const app = express()
const port = 4000

app.use(express.json())
app.use("/api/v1/user", familyRoutermulter)
app.use('/familyupload',express.static('familyupload'))









app.listen(port, () => {
    console.log(`server is listening on port:${port}`);
})





