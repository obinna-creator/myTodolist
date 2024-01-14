const mongoose= require("mongoose")

const subTaskSchema = new mongoose.Schema({
  
    subTask: {
        type: String,
        require:true
    },
    Task:[{
        type: mongoose.SchemaTypes.ObjectId,
        ref:"task"
    }]


})
const tasksmodel=mongoose.model("subtask ",subTaskSchema)
module.exports=tasksmodel