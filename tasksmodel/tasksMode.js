const mongoose = require("mongoose")
//const subTaskSchema= require("../tasksmodel/subtaskModel")
//tasksModel.js
const taskSchema = new mongoose.Schema({
    title:{
        type: String,
    },
    description: {
        type:String
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref:"onboarding"
    },
    subTasks: [{
        type: mongoose.SchemaTypes.ObjectId,
        ref:"subtask"
    }],
    status: {
        type: mongoose.SchemaTypes.ObjectId,
        ref:"status"
    }
    


})
//tasksModel.js
const tasksMode= mongoose.model("task", taskSchema)
module.exports=tasksMode