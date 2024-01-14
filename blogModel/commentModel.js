
const mongoose = require("mongoose")
const commentSchema = new mongoose. Schema({
     name: {
        type: String,
        
    },
    message: {
        String
    },
    post: {
  
     type: mongoose.Schema.Types.ObjectId,
        ref:"blog"
    },
     
   

},{timestamps:true})

const commentuser = mongoose.model("comments", commentSchema)
module.exports = commentuser









// exports.update = async (req, res) => {
//     try {
//         const id = req.params.id
//     const {name, email}= rq.body
//     const update = await regModel.findByIdAndUpdate(id, { name, email }, { new: true })
//     await update.save()
//     return res.status(200).json({
//         message:"updated successfully"
//     })

//     } catch (error) {
//         res.status(500).json({
//             message:"cannot update:internal server error"
//         })
//     }
// }
