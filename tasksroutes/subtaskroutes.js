const express= require("express")


const {createsubtask} = require("../taskscontrol/subtasks")
const router= express.Router()
router.post("/createsubtask",createsubtask)
module.exports=router
