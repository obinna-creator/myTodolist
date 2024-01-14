const createnewuser= require ("../onboardingModel/onboardingmodel.js")
const jwt= require("jsonwebtoken")
exports.signUp = async (req, res) => {
    try {
        const newUser = await  createnewuser.create(req.body)
        const token = jwt.sign({ id: newUser._id }, process.env.json_Secret,{
            expiresIn:process.env.Login_Expires
        })
       

        res.status(201).json({
            message: "signUp successfully",
            token,
            data: {
                user:newUser
            }
        })
         if (!newUser) {
            res.status(400).json({
                message:"signup not successfull"
            })
        }
           


    } catch  (error)  {
        res.status(500).json({
            message:error.message
        })
    }
}

exports.Login = async (req, res) => {
    try {
        // destructure the email and password
        const { email, password } = req.body
        if (!email || !password) {
            res.status(400).json({
                message:"please input email and password"
            })
        }
        // check if user exists with the given email and password
        const user = await createnewuser.findOne({ email }).select('+password')
        if (!user) {
            res.status(404).json({
                message:"user with the given emaila nd password does not exists"
            })
        }
        //check if the password in the reques body and the database matches and if the user exists
        //const isMatch= await user.comparepasswordfromDB(password, user.password)
        if (!user || !(await user.comparepasswordfromDB(password, user.password)) ) {
            res.status(404).json({
                message:"user doesnt exists and password doesnt match"
            })
        }// login user by sending a token
     
  const token = jwt.sign({ id: user._id }, process.env.json_Secret,{
            expiresIn:process.env.Login_Expires
        })
        res.status(200).json({
            message: "logged in successfully",
            token,
            user
        })

    } catch (error) {
        res.status(500).json({
            message:error.message
        })
    }
}

exports.createtask = async (req, res) => {
    
    try {
        
    
  


    } catch (error) {
        res.status(500).json({
            message:error.message
        })
    }

}

