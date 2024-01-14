const express= require("express")
const combineclassCon = require("../combineCon/combineclassCon")
const router= express.Router()
router.route("/signup").post(combineclassCon.signup)
router.route("/login").post(combineclassCon.login)
module.exports = router