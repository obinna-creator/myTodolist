const express = require("express")
const {getallstatus,createTask,getonestatus,deleteonestatus } = require("../taskscontrol/statuscontroller.js")
const {authenticate} = require("../taskAuth")
//authenticate
const router= express.Router()
router.post("/create_status", authenticate, createTask)
router.get("/get_all_status", authenticate, getallstatus)
router.get("/gete_one_status", authenticate, getonestatus)
router.delete("/deleteonestatus",authenticate,deleteonestatus)
module.exports=router
