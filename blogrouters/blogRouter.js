const express = require("express")

const { createPost,getOneblog ,getAllBlog ,updateBlog,deleteallblog} = require("../blogcontrollers/blogControllers")

const router = express.Router()
router.post("/newPost", createPost)
router.get("/getOneBlog/:id", getOneblog)
router.get("/getAllblogpost", getAllBlog)
router.put("/updateBlog/:id",updateBlog)
router.delete("/deleteBlogs/:id",deleteallblog)
 module.exports= router