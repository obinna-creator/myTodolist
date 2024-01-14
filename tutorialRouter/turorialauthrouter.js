const express = require("express")
const tutorialcon = require("../tutorialController/tutorialcon")
//const tutorialcon = require("../tutorialController/tutorialcon")
const router= express.Router()
router.route('/signup').post(tutorialcon.signup)
router.route('/login').post(tutorialcon.login)
router.route('/getall').get(tutorialcon.protect,tutorialcon.getall)
module.exports= router
