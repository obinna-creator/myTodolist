const subtaskModel= require ("../tasksmodel/subtaskModel")
const tasksMode= require("../tasksmodel/tasksMode")
exports.createsubtask = async (req, res) => {
  try {
   
    const id = req.params.id;
    const task= await  tasksMode.findById(id)

    if (!task) {
      return res.status(404).json({
     message:"task does not exists"   
   

      })
    }
    const subtask = await subtaskModel.create(req.body);
    if (!subtask) {
      return res.status(404).json({
        message:"an error occur while creating a subtask"
      })
    }

    task.subTasks.push(subtask._id)
    subtask.Task= task._id
  // post the sub task into the subtask

    await task.save()
    await subtask.save()
    res.status(201).json({
      message:"subtask created successfully"
    })

  } catch (error) {
    res.status(500).json({
      message: error.message
    })
  }

}