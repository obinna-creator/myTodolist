const express = require ("express")
const authenticationCon = require ("../autController/authenticationCon.js")
const router= express.Router()
router.route("/signup").post(authenticationCon.signup)
//router.route("/login").post(authenticationCon.login)
module.exports= router