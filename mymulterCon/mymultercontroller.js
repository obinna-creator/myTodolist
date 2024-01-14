const mySchema= require("../multersModel/mymulterModel")
const fs= require("fs")



exports.signup = async (req, res) => {
    try {
        const { name, department } = req.body
        const files = req.files
        const profile = await mySchema.create({
            name,
            department,
            photos:files.map(file =>file.filename)
        })
        //
        if (!profile) {
            res.status(400).json({
                message:"unable to signup"
            })
        } else {
            res.status(200).json({
                message: "successfully signup",
                data:profile
            })
        }

    } catch (error) {
        res.status(500).json({
            message:error.message
        })
        
    }
}