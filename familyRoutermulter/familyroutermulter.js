const express = require("express")

const  upload  = require("../familyUtils/familymulter")
const {signup}= require("../familymulter/familymulterCon")
 const router = express.Router()
//router.post("/sign-up",familyupload.single('fatherspicture'),signup)
router.post("/sign-up",  upload .fields([
      {name:'fathersPicture',maxcount:1},
      {name:'mothersPicture',maxcount:1},
      {name:'childrensPicture',maxcount:7}
  ]),signup)

module.exports= router


//familymulter/familymulterCon.js