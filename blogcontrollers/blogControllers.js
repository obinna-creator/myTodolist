const blogModel = require("../blogModel/blogmodel")
const commentModel= require("../blogModel/commentModel")

exports.createPost = async (req, res) => {
    try {
        const { title, content } = req.body
        const newPost = await blogModel.create({
          title,
         content
        })
        res.status(200).json({
            message: "blog created sucessfully",
            data: newPost
       })


    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}

exports.getOneblog = async (req, res) => {
    try {
         
        const id = req.params.id;
        const blogs = await blogModel.findById(id).populate("comments")
        if (!blogs) {
            res.status(400).json({
                message:"blog posts not found"
            })
        }
        res.status(200).json({
            message: "gotten one blog",
            blogs
        })
     } catch (error) {
         res.status(500).json({
            message:error.message
        })
     }
 }

exports.getAllBlog = async (req, res) => {
    try {
   
        const getallblog = await blogModel.find().select(blogModel._id, blogModel.title,blogModel.comments).populate('comments')
        if (getallblog.length === null) {
            res.status(404).json({
                 message:"no post was found at all"
             })
         }   
        res.status(200).json({
            message: "gotten all post successfully",
           getallblog 
       })



    } catch (error) {
        res.status(500).json({
            message:error.message
        })
     }
}
 
exports.updateBlog = async (req, res) => {
    try {
        const id = req.params.id
        const {title,content}= req.body
        const updateblog= await blogModel.findByIdAndUpdate(id,{title, content},{new:true})
        if (!updateblog) {
            res.status(404).json({
                    message:"blog not updated",
                    
                })
        }
         res.status(200).json({
             message: "blog updated successfully",
             updateblog
             
         })

    } catch (error) {
        res.status(500).json({
            message:error.message
        })
     }
}
 
exports.deleteallblog = async (req, res) => {
    try {
        
        const id = req.params.id
        const deleteAllBlog = await blogModel.findByIdAndDelete(id)
        if (!deleteAllBlog) {
            res.status(400).json({
                message:"blog post not deleted"
            })
        }
        await commentModel.deleteMany({post:id})
        res.status(200).json({
            message: "blog deleted successfully",
            deleteAllBlog
      })


    } catch (error) {
        res.status(500).json({
            message:error.message
        })
    }
}