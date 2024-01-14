
const User = require("../tutorialModel/tutorialmodel.js")
const jwt = require ("jsonwebtoken")
const util= require("util")
exports.signup = async (req, res) => {
   try {
    
       const newUser = await User.create(req.body)
       const token = jwt.sign({ id: newUser._id }, process.env.json_Secret, {
           expiresIn:process.env.Login_Expires
       })
       res.status(201).json({
           message: "signup sucessfully",
           token,
           data: {
               user:newUser
           }
       })
       
       
   } catch (error) {
       res.status(500).json({
      message:error.message  
    })
   }
}
  
exports.login = async (req, res, next) => {
  try {
    
      // destructure the email and password
      const { email, password } = req.body
      //check if the user and email is inputed in the req.body
      if (!email || !password) {
          res.status(404).json({
              message:"please input email and password"
          })
          return next()
          
      }
      //check if user exists with the given email
      const user = await User.findOne({ email }).select('+password')
      //check if the password in the req.body and in the database matches and if the user exists
     // const isMatch = await user.comparepasswordInDB(password, user.password)
      if (!user || !(await user.comparepasswordInDB(password, user.password))) {
          res.status(404).json({
             message:"user doesnt exists and password doesnt match"
         })
          return next()
      }

   // log in the userby sending a token
      const token = jwt.sign({ id: user._id }, process.env.json_Secret, {
       expiresIn:process.env.Login_Expires
   })

      res.status(200).json({
          message: "logged in successfuully",
          token,
          user
      })
  } catch (error) {
      res.status(500).json({
       message:error.message
   }) 
  }

}


exports.getall = async (req, res, next) => {
    try {
        const getall = await User.find()
        if (getall.length===0) {
            res.status(400).json({
                message:"no user found"
            })
            return next()
        }

        res.status(200).json({
            message: "you have gotten all",
            getall
    })

    } catch (error) {
        res.status(500).json({
            message:error.message
        })
    }
}


exports.protect = async (req, res, next) => {
     try {
        
// 1.reade the token and check if it exists

         const testToken = req.headers.authorization;
        let token;
    if (testToken && testToken.startsWith('bearer')){
        token = testToken.split(' ')[1];
        return next()
         }
         if (!token) {
             res.status(401).json({
                 message:"you are not allowed to login"
             })
               next()
         }

    // console.log(token)
    
         // 2. validate the token 
         const decodedToken = await util.promisify(jwt.verify)(token, process.env.json_Secret);
         
         console.log(decodedToken);

    //3. if the user exists

    const user = await User.findById(decodedToken.id)
         if (!user) {
             res.status(401).json({
                 message: " the user with the given id does not exists"
                 
             })
         next()
     }
    

         
         
      //4 if the user changed password after the token was issued
      
      
      // allow user access the route
    
         
        //  res.status(200).json({
        //      message: "successfull",
        //      token,
        //      decodedToken 
        //  })
         
     } catch (error) {
         res.status(500).json({
            message:error.message
        })
    }
    
    
}
 
