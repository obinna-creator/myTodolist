const userModel = require ('../multerModel/multermodel')
const fs= require("fs")

exports.signup = async (req, res) => {
    try {
      
        const { fullname, stack,  } = req.body
        const file= req.file.filename
          
        const profile = await userModel.create({
            fullname,
            stack,
             profileImage: file
        })
        

        if (!profile) {
            res.status(400).json({
                message:"unable to signup"
            })
        } else {
            res.status(200).json({
                message: " sucessfully signup",
                data:profile
            })
        }
    
        
    } catch (error) {
        res.status(500).json({
           message:error.message
       }) 
    }
}

exports.getOne = async (req, res) => {
   try {
     const id = req.params.id
       
       const profile = await userModel.findById(id)
       if (!profile) {
           return res.status(404).json({
                message:"user id is not found"
            })
        }

       res.status(200).json({
           status: "success",
           message: "user found",
           data:profile
       })

   } catch (error) {
       res.status(500).json({
        message:error.message
    })
   }
}







exports.getAll = async (req, res) => {
   try {
    
       
       const profile = await userModel.find()
       if (!profile.length===0) {
           return res.status(400).json({
                message:"they are no user found"
            })
        }

       res.status(200).json({
           message: "this are the user available",
           profile
       })

   } catch (error) {
       res.status(500).json({
        message:error.message
    })
   }
}




exports.userUpdate = async (req, res) => {
    try {
        const id = req.params.id;
        const { fullname, stack } = req.body
        const profile = await userModel.findById(id)

        if (!profile) {
            return res.status(404).json({
                status: "failed",
                message: "user not found"
            })
        }


        const data = {

            fullname: fullname || profile,
            stack: stack || profile.stack,
            profileImage: profile.profileImage
        }
    
         // create a variable to hold the path of the image
        if (req.file ) {
            //check if the person is passing a new image
   const oldPath = `../uploads/${profile.profileImage}`
        if (fs.existsSync( oldPath)) {
            fs.unlinkSync(oldPath)
        }
      data.profileImage= req.file.profileImage
            
        }
      
        const newProfile = await userModel.findByIdAndUpdate( id, data,{ new: true })
        if (newProfile) {
            return res.status(200).json({
                status: "success",
                message: "profile updated successfully",
                data: newProfile
            })
        } else {
            return res.status(400).json({
                status: "not successfull",
                message: "profile not updated successfully",
                data: newProfile
            })

    }
        
    } catch (error) {
        res.status(500)({
            message:error.message
        })
    }
}




exports.deleteuser = async (req, res) => {
    try {
        const id = req.params.id

          const profile = await userModel.findById(id)

        if (!profile) {
            return res.status(404).json({
                status: "failed",
                message: "user not found"
            })
        }
            //check if the person is passing a new image
            const oldPath = `../uploads/${profile.profileImage}`
        if (fs.existsSync( oldPath)) {
            fs.unlinkSync(oldPath)
        }
        const deleteUser = await userModel.findByIdAndDelete(id)
        if (!deleteUser) {
            res.status(400).json({
                message:"no user exist with the id found"
            })
        } else {
            res.status(200).json({
                message: `user with the ${id} is deleted`,
                data:profile,
                deleteUser
            })
        }


    } catch (error) {
        res.status(500).json({
            message:error.message
        })
    }
    
}





