const { error } = require("console")
const user = require("../model/userModel")
const dotenv= require("dotenv")
const jwt = require ("jsonwebtoken")
exports.signup = async (req, res, next) => {
    try {
        
        const newUser = await user.create(req.body)
        const token = jwt.sign({ id: newUser._id }, process.env.json_Secret, {
            expiresIn:process.env.Login_Expires
        })
        
        if (!newUser) {
            res.status(400).json("unable to create user")
        } else {
            res.status(201).json({
                message: `user ${newUser.name} has been created successfully`,
                token,
                data: newUser
            })
        }
    }
    catch (error) {
        res.status(400).json(error.message)
    }
}


exports.login = async (req, res, next) => {
   try {
    
       const email = req.body.email
       const password = req.body.password   
       //object destructuring
       //  const {email, password}= req.body
       if (!email || !password) {
           res.status(400).json({
            message:'error please input your  email and password'
           })
           // check if user exist with the given email
           const  user= await user.find(({email, password }))
       } else {
           res.status(200).json({
               status: `success`,
               token:"",
               user
           })
       }
   
   
   
   } catch (error) {
       return next(error)
   }
}
     

   

