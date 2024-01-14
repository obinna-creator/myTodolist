const commentModel= require("../blogModel/commentModel")
const blogModel= require("../blogModel/blogmodel")
exports.newComment = async (req, res) => {
    try {
        const id= req.params.id
        const blog = await blogModel.findById(id).populate("comments")
        if (!blog) {
            return res.status(404).json({
                message:"blog not found"
            })
        }
        const {message, name}= req.body
        const comment = await commentModel.create({
            message, name
        })
        //post the comment into the comments field
        //  in the blog comment
        blog.comments.push(comment._id)
        comment.post = blog._id
        
        //save the changes in the database
        await blog.save()
        await comment.save()
        res.status(201).json({
            message: "successfully cposted a comment",
            data: comment,
          blog   
        })
    } catch (error) {
        res.status(500).json({
            message:error.message
        })
    }
}

exports.getOne = async (req, res) => {
    try {
        const id = req.params.id;
        const blog = await commentModel.findById(id);
        // populate('comments')
        if (!blog) {
            res.status(404).json({
                message:"blog not found"
            })
        }
        res.status(200).json({
            message: "viewing blog post",
            blog
            
        })
    } catch (error) {
        res.status(500).json({
            message:error.message
        })
    }
}

exports.getall = async (req, res) => {
    try {
        const postId= req.params.id
        const getAll = await blogModel.findById(postId).populate("comments")
        if ( getAll.length === 0) {
                res.status(404).json({
                message: "No comments available",
            });

            
        }
    } catch (error) {
        res.status(500).json({
            message:error.message
        })
    }
}

exports.updates = async (req, res) => {
    try {
        const id = req.params.id
        const { comment, post } = req.body
        const update = await commentModel.findByIdAndUpdate(id, { comment, post }, { new: true })
        // //save the update in the database 
        // await update.save()
        if (!update) {
            res.status(404).json({
               message:"update not successfull"
           })
        } else {
            
         res.status(200).json({
                message: "updated successfull",
                data:update
            })
        }

           
       

        
    } catch (error) {
        res.status(500).json({
            message:error.message
        })
    }
}
exports.deletecomment = async (req, res) => {
    try {
        const id = req.params.id
        const postId = await blogModel.findById(postId )
    const deletecomment= await commentModel.findByIdAndDelete(id)
    if (!deletecomment) {
        res.status(400).json({
             message:"cannot delete comment"
         })
    } else {
        await commentModel.deleteMany({post:id})
        res.status(200).json({
            message: "comment deleted successfully",
            deletecomment
        })
     }
    } catch (error) {
        res.status(500).json({
            message:error.message
        })
    }
}