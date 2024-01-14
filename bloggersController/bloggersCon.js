const bloggersModel= require("../bloggersModel/bloggersmodel")

exports.createnewblog = async (req, res) => {
    try {
        
        const title = req.body.title
        const content= req.body.content
        const newBlog= await bloggersModel.create({
            title,
            content
        })

        console.log(newBlog)
        if (!newBlog) {
             
            res.status(400).json({
                message:"cannot create a blog"
            })
        
        } else {
             res.status(201).json({
            message: "blog created successfully",
           newBlog
        })
         }
       

    } catch (error){
        res.status(500).json({
            message:error.message
        })
    }
    
}

