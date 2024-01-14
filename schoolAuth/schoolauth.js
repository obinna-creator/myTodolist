const regModel= require ("../regModel/regmodel")
const jwt= require('jsonwebtoken')
const authenticate = async (req, res, next) => {
    
    try {
           
        const hasAutor = req.header.authenticate
        if (!hasAutor) {
            return res.status(400).json({
                message: "authorisation failed:user not found"
            })
        }
        const Token = hasAutor.split(' ')[1];

        if (!Token) {
            return res.status(400).json({
                message: "token not found"
            })
                
        }
        const decodedToken = jwt.verify(Token, process.env.json_Secret)
        const user = await regModel.findById(decodedToken.userId)
        // if (user === null) {
        //     res.status(400).json({
        //         message: "authorisation failed:user  not found"
        //     })
                
        // }
      //  req.user = decodedToken
        // if (user.role === 'Teacher' && user.isloggedIn === true) {
        //     next()
            
        // } else {
        //     return res.status(500).json({
        //         message: "user not found"
        //     })
        // }

    
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}
     
const Role = async (req, res, next) => {
    try {
        if (req.user.role==="Teacher") {
            next()
            
        } else {
            res.status(400).json({
                message:"you are not allowed ro perform this function"
            })
        }



    } catch (error) {
        res.status(500).json({
           message:"internal server error:you are not allowed"
       }) 
    }
}
module.exports= {authenticate,Role}