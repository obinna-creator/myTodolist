const multer= require("multer")
const storage = multer. diskStorage({
    destination: (req, file, cb) => {
        cb(null,'./myupload' )
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname)
    }
})

const fileFilter = (req, file, cb) => {
    if (file.mimetype.startsWith('image/')) {
        cb(null, true)
    } else {
        cb( new Error('file not supported'))
    }
}

const fileSize= {
    limits:1024 * 1024* 1024* 10
}


const maxFileCount= 5
const upload= multer({
    storage,
    fileFilter,
    limits:{...fileSize,files:maxFileCount}
})
module.exports= upload