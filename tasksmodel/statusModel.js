const mongoose= require("mongoose")

const statuschema = new mongoose.Schema({
    title: {
        type:String,
    },
    task: [
         {
        type: mongoose.Schema.Types.ObjectId,
        ref:"task"
    }
    ]
   
})

const statusModel = mongoose.model("status",statuschema )
module.exports= statusModel