// reading files sychronously

// let text=fs.readFileSync('../files/input.txt', "utf-8")

// console.log(text);
// let content =`this is my data output:${text}.\n data created ${new Date()}`
// fs.writeFileSync('../files/output.txt',content)

// api get request

// creating a movies api



//  const fs= require ("fs")
// const express= require("express")
// const port = 4000
// let app= express()
// // get the reques through the fs module
// let movies = JSON.parse(fs.readFileSync('../data/movies.json') )
   
// // get request api
// app.get('/api/v1/movies', (req, res) => {
//     res.status(200).json({
//         status: "success",
//         count:movies.length,
//        data: {
//            movies:movies
//        }
//    })
// })


// app.listen(port, () => {
//     console.log(("server is listening on..."));
// })


// import the module
const fs= require ("fs")
const express = require("express")
const app= express()
 app.use(express.json())


const port = 4000


//app.use(express.json())
  let movies= JSON.parse (fs.readFileSync('../data/movies.json') )

// get request api 
app.get("/api/v1/movies" ,(req, res)=> {
    res.status(200).json({
        status: "success",
         movies:movies
    })
} )

//post request api


app.post("/api/v1/movies", (req, res) => {
   
// const server = http.createServer((req, res) => {
//     //show a text content
//     res.writeHead(200, { "content-Type": "text/plain" });
//     res.end("Hello world")
// })
    const newId = movies[movies.length - 1].id + 1;
    const newMovie= Object.assign({id: newId},req.body)
    movies.push(newMovie)
     
    fs.writeFile("../data/movies.json", JSON.stringify(movies), (error) => {
            res.writeHead(200, { "content-Type": "text/plain" });
    res.end("Hello world")
 
        res.status(201).json({
            status: "success",
            data: {
                movies:movies
            }
       }) 
    })
     
    res.send("created")
      //console.log(req.body);
})


app.listen(port, () => {
    console.log(`server is on port :${port}`);
})


