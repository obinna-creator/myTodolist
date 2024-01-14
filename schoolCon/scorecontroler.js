const scoreModel= require("../regModel/scoremodel")
const regModel= require("../regModel/regmodel")

exports.Addscore = async (req, res) => {
    try {
         
const {studentId, score}=req.body

        // check if the studen is valid
        const checkStudent= await regModel.findById(studentId)
        if (!checkStudent || checkStudent.role!=="Student") {
            return res.status(401).json({message:"student not found"})
            
        }
      
    //check if the student score is existing and fetch his existing score

       // let existingScore = await scoreModel.findOne({studentId})
       // if (!existingScore) {
         // const   existingScore= new scoreModel({studentId})
        // }
           const   existingScore= new scoreModel({studentId})
        // update the score for student
        if (score.math) {
              existingScore.math += score.math
            
        }
         if (score.english) {
              existingScore.english += score.english
            
        }
        //save the score
        await existingScore.save()
        res.status(200).json({
            message: `score added successfully`,
            data: existingScore
     })
  
    } catch (error) {
        res.status(500).json(
            error.message
        )
    }
}

exports.getstudentscore = async (req, res) => {
    try {
        
        const studentId = req.params.studentId
        // check if the student is valid
        const student = await regModel.findById(studentId)
        if (!student || student.role !=="Student") {
            return res.status(400).json({
                message:"student score not found"
            })
            
        }
        // fetch the student score
        const studentScore = await scoreModel.findOne({ studentId })
        if (!studentScore) {
            return res.status(400).json({
                message:"student score not found"
            })
        }
        // calculate the total and average score of the student
        const totalscore = studentScore.math + studentScore.english
        const totalSubject = 2
        const averageScore = totalscore / totalSubject
        //throw a success 
        res.status(200).json({
            message: "student score is:", data:
                student, 
            studentScore,
            averageScore
        })

    } catch (error) {
        res.status(500).json(error.message)
    }
}


exports.updateScore = async (req, res) => {
    try {
   const studentId= req.params.studentId
        const updated = req.body.score
        //check if the student is valid
        const student= await regModel.findById(studentId)
        if (!student) {
            return res.status(404).json({
                message:"student found"
            })
        }
        // use findById to update the score
        const option = { new: true, upsert: true };
        const updateScore = await scoreModel.findOneAndUpdate({ studentId }, { $set: updated },
            option)
        res.status(200).json({message:"scores updated succefully",data:updateScore})

        
    } catch (error) {
        res.staus(500).json(error.message)
    }
}






exports.delete = async (req, res) => {
   try {
     const studentId = req.params.studentId
    //check if the student is valid
    const student = await regModel.findById(studentId)
    if (!student || student.role !=="Student") {
        return res.status(404).json({message:"Student not found"})
        
    }
    //fetch the score for the student
    const studentScore= await scoreModel.findOneAndDelete(studentId)
    // also delete the student details from the regmodel
    await regModel.findByIdAndDelete(studentId)
    res.status(200).json({
        message: "student score and details deleted succefuuly",
        data: student,
        studentScore
    })
   } catch (error) {
       res.status(500).json({
        message:"cannot delete user"
    })
   }
}