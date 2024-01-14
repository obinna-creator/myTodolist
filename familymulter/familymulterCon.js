const familySchema = require("../familyModel/familymodel")
const fs = require("fs")

exports.signup = async (req, res) => {
    try {
            
        const { fathersName, mothersName, childrensName } = req.body
       const file= req.files
        const famprofile = await familySchema.create({
            fathersName,
            mothersName,
              childrensName,
            fathersPicture:file.fathersPicture.filename,
            mothersPicture: file.mothersPicture.filename,
           childrensPicture:file.childrensPicture
        })
        // await famprofile.save()
       if(!famprofile){
         res.status(400).json({
               message: "not uploaded",
               
           })
       } else {
           res.status(400).json({
               message: "uploadede not successfully",
                famprofile
           })
       }

    } catch (error) {
        res.status(500).json({
            message:error.message
        })
    }
}