const express= require("express")
const {createnewblog }= require("../bloggersController/bloggersCon")
const router= express.Router()

router.post("/createblogpost", createnewblog)
module.exports= router
