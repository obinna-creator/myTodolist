//const onboarding= require("../onboardingModel/onboardingmodel")

const statusModel = require ("../tasksmodel/statusModel")


exports.createTask = async (req, res) => {
    try {
       
       const {  title,description} = req.body
        const status = await statusModel.create({
            title,
            description
        })
        
        res.status(201).json({
            message: "status created",
            status
        })





    } catch (error) {
        res.status(500).json({
            message:error.message
        })
    }
}



exports.getallstatus = async (req, res) => {
    try {
       
        const allstatus= await statusModel.find().populate("task")
         res.status(201).json({
             message: "status created",
             data:allstatus.status
        })
    } catch (error) {
        res.status(500).json({
            message:error.message
        })
    }
}


exports.getonestatus = async (req, res) => {
    try {
       const id= req.params.id
        const onestatus = await statusModel.find(id).populate("task")
        if (!onestatus) {
            return res.status(404).json({
             message:"no status found"
         })
        }
         res.status(201).json({
             message: "status created",
             data:allstatus.status
        })
    } catch (error) {
        res.status(500).json({
            message:error.message
        })
    }
}

exports.deleteonestatus = async (req, res) => {
    try {
       
        const id = req.params.id
        const status = await statusModel.findByIdAndDelete(id)
        if (!status) {
            res.status(404).json({
                 messsage:"cannot delete one status"
             })
        }
        res.status(200).json({
            message: "status deleted sucessfully",
             status
        })
 
    } catch (error) {
      
        res.status(500).json({
            message: error.message
        })
    }
}