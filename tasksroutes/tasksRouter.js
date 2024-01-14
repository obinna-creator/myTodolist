const express= require("express")

const {getone,createPost,getalltasks, updatetask}= require("../taskscontrol/tasksCon")
const {authenticate}= require("../taskAuth")

const router = express.Router()

router.post("/create", authenticate, createPost)
router.get("/getOne", authenticate, getone)
router.get("/getAll", authenticate, getalltasks)
router.put("/updateTaksk", authenticate,  updatetask )




module.exports = router

//tasksRouter.js  