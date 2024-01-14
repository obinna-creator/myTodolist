const mongoose= require("mongoose")



const movieSchema = new mongoose.Schema({
     name: {
        type: String,
         default:false,
    },
    releaseYear: {
        type: String,
        
    },
    duration: {
        type:String
    }

})
const myMovies= mongoose.model("Movies", movieSchema)
module.exports= myMovies
















//"id":1,"name":"Die Hard","releaseYear":1998,"duration":90},{"id":2,"name":"Expendibles","releaseYear":200,"duration":80},{"id":3,"name":"installer","releaseYear":1998,"duration":120},{"id":4,"name":"Test","realeseYear":20012,"duration":30},{"id":5,"name":"Test","realeseYear":20012,"duration":30},{"id":6,"name":"Test","realeseYear":20012,"duration":30},{"id":7,"name":"Test","realeseYear":20012,"duration":30




// const multer= require("multer")

// const storage = multer.diskStorage({
//     destination: (req, file, cb) => {
//         cb (null, './uploads')
//    }
// })

// const fileFilter = (req, file, cb) => {
//     if (file.mimetype.startsWith('image/')) {
//         cb(null, true)
//     } else {
//         cb(new Error('file type not supported, image only'))
//     }
// }

// const fileSize={
//     limits :1024* 1024* 10
// }

// const upload = multer({
//     storage,
//     fileFilter,
//     limits:fileSize
// })

// module.exports= upload