const onboardingmodel= require("../onboardingModel/onboardingmodel")
const tasksMode = require('../tasksmodel/tasksMode')
const statusModel= require('../tasksmodel/statusModel')



exports.createPost = async (req, res) => {
    try {
        const id = req.params.statusId
        const{title, description , userId}=req.body
        const status = await statusModel.findById(id)
        const user= await onboardingmodel.findById(userId)
        if (!status) {
            res.status(404).json({
                message:"no status found"
            })
        }

        const task = await tasksMode.create({
                title,
              description  
            })

     
        status.task.push(task._id)
        task.status = status._id
        res.status(201).json({
            message: "succefully added a task",
            data: task,
            user
        })
        
    } catch (error) {
        return res.status(500).json({
            message:error.message
        })
}
}



exports.getalltasks = async (req, res) => {
    try {
        

        const task= await tasksMode.find().populate('subtask')
        if (task.length === 0) {
            return res.status(404).json({
                message:"they are no status available"
            })
        }
        res.status(200).json({
            message:`tasks fetched ${task.length} task here`
        })
    } catch (error) {
        res.status(500).json({
            message:error.message
        })
    }
}


exports.getone = async (req, res) => {
    try {
        
const id= req.params.id
        const task= await tasksMode.findById(id).populate('subtask')
        if (!task) {
            return res.status(404).json({
                message:"they are no status available"
            })
        }
        res.status(200).json({
            message:`tasks fetched ${task.length} task here`
        })
    } catch (error) {
        res.status(500).json({
            message:error.message
        })

    }
}

exports.updatetask = async (req, res) => {
    try {
        const id = id.params.id
        const {title,description}= req.body
        const task = await tasksMode.findAndUpdateById(id,{ title, description }, { new: true })
        if (!task) {
              res.status(404).json({
            message: "status deleted sucessfully",
           task 
        })
        }
          res.status(200).json({
            message: "status deleted sucessfully",
           task 
        })


    } catch (error) {
        res.status(500).json({
            message:error.message
        })
    }
}