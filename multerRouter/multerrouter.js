const express = require("express")
const { signup,getOne, getAll,userUpdate,deleteuser } = require("../multer/multerCon")
const upload= require ("../utils/multer.js")
const router= express.Router()

router.post('/sign-up', upload.single('profileImage'), signup)
router.get('/getone:id', getOne)
router.get('/getall',getAll)
router.get('/update',upload.single('profileImage'),userUpdate)
router.delete('/deleteuser:id', deleteuser)

module.exports= router