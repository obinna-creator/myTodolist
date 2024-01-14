const multer= require("multer")

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './familyupload')
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname)
    }
});


//,'./motherupload','./childrenupload'
const fileFilter = (req, file, cb) => {
    if (file.mimetype.startsWith('image/')) {
        cb(null, true)
    } else {
        cb(new Error ("file is not supported"), false)
    }
}

const fileSize = {
    limits:1024 * 1024 *  10
}



const upload = multer({
    storage ,
    fileFilter,
    limits:fileSize

   
})



module.exports = fatherupload


