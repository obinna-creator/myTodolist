const mongoose= require("mongoose")
const commentSchema = new mongoose.Schema({
    name: {
        String
    },
    message: {
        type:String
    },
    post: {
        type: mongoose.Schema.Types.ObjectId,
        ref:"blogger"
    }

},{timestamps:true})

const commentUser= mongoose.model("commentuser",ommentSchema )

module.exports= commentUser