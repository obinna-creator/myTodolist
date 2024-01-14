const  fs = require("fs")
const express= require("express")
const app = express()

const port= 4000
const html= fs.readFileSync('../Template/index.html',"utf-8")
const http= require ("http")
// app.get( (req,res) => {
    
// })

const server = http.createServer((request, response) => {
    let path= request.url
   if (path==='/' || path.toLocaleUpperCase()==='/home') {
    response.end("you are in home page")
    
   } else if (path.toLocaleLowerCase() === "/about") {
    response.end("you are in about page")
   } else if (path.toLocaleLowerCase() === "/contact") {
       response.end("you are in contact page")
   } else {
        response.end(" error 404 page not found")
   }
    
})

server.listen(port, () => {
    console.log(`server is listening on port: ${port}`);
})