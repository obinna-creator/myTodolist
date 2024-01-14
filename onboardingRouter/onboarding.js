const express= require("express")
const {signUp, Login} =require('../onboardingController/onboardingCon')
const router= express.Router()

router.post("/signup",signUp)
router.post("/login",Login)
module.exports= router