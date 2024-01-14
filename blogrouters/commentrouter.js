const express= require("express")
const {newComment, getOne,getall, updates,deletecomment}= require("../blogcontrollers/commentController")
const router = express.Router()

router.post('/anotherpost/:id', newComment)
router.get("/getone/:id", getOne)
router.get("/getAll/:postId/:id", getall)
router.put("/updatecomment/:id",updates)
router.delete("/deletecomments/:id",deletecomment)
module.exports = router




