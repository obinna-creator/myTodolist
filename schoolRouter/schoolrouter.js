const express = require ("express")
//const Schoolrouter = require ("../schoolRouter/schoolrouter.js")
const router = express.Router()
const { register, Login, getall, update} = require("../schoolCon/schoolcontroller.js")
const { authenticate,Role} = require("../schoolAuth/schoolauth.js")
//router.route("/signup").post(authenticationCon.signup)
//router.route("/login").post(authenticationCon.login)
router.post('/registration', register)
router.post('/login', Login)
router.put('/update:id',update)
router.get('/getall', authenticate, Role,getall)

module.exports= router