const regModel= require ("../regModel/regmodel")
const bcrypt = require('bcrypt')
const jwt= require('jsonwebtoken')

exports.register = async (req, res) => {
    try {
        const {name, email, password, role}=req.body
      //  const lowerCase = email.toLowerCase()
        const salt = bcrypt.genSaltSync(10)
        const hashpassword = bcrypt.hashSync(password, salt)
        
        
        const user = new regModel({
            name, 
            email,
            password: hashpassword,
            role
        })
        const token = jwt.sign(
            { email: user.email, userId: user._id },
            process.env.json_Secret,
            { expiresIn: process.env.Login_Expires})
         await user.save()
        res.status(201).json({
                message: "registration sucessful",
                token,
                  user
            } )
        
    } catch (error) {
        res.status(500).json({
            message: error.message
        }) }  
}


exports.Login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user= await regModel.findOne({email})
        if (!user) {
            return res.status(400).json({
                message:"wrong input"
            })   
        }
        const checkpass = bcrypt.compareSync(password, user.password)
        if (!checkpass) {
            res.status(400).json({
                message:"incorrect password"
            })
        }
        if (user.role==="Teacher") {
            user.isAdmin = true
            await user.save()
            
        }
      
        const token = jwt.sign({
            email: user.email,
            userId: user._id,
            role: user.role,
            login: user.isloggedIn
            
        } ,process.env.json_Secret,{expiresIn:process.env.Login_Expires})
  
        user.isloggedIn = true
        await user.save()
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

exports.getall = async (req, res) => {
    try {
        const getall= await regModel.find()
        if (getall.length===0) {
            res.status(400).json({
                message:"no user found"
            })
            
        } else {
            res.status(200).json({
                message: `there are  are availabel`,
                getall
            })
      }
    } catch (error) {
        res.status(500).json({
            message:error.message
        })
    }
}

exports.update = async (req, res) => {
    try {
        const id = req.params.id
    const {name, email}= rq.body
    const update = await regModel.findByIdAndUpdate(id, { name, email }, { new: true })
    await update.save()
    return res.status(200).json({
        message:"updated successfully"
    })

    } catch (error) {
        res.status(500).json({
            message:"cannot update:internal server error"
        })
    }
}


exports.deleteUser = async (req, res) => {
   try {
    
   const id = req.params.id
   const deleted= await regModel.findByIdAndDelete(id)
   if (!deleted) {
       res.status(400).json({
        message:"no user with the id found"
    })

       
   } else {
       res.status(200).json({
        message:`user with the id ${id} is deleted succesfully`
    })
   }

       
   } catch (error) {
       res.status(500).json({
        message:"internal server error: cannot delete"
    })
   }
}