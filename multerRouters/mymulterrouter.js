const express = require("express")
const {signup}= require("../mymulterCon/mymultercontroller")
const upload= require("../myUtils/mymulter")
const router = express.Router()

router.post('/sign-up',upload.array('photos'), signup,)


module.exports= router