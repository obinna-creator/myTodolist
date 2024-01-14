const onboardingmodel= require("./onboardingModel/onboardingmodel")
const jwt= require("jsonwebtoken")
exports.authenticate = async (req, res, next) => {
    
   
    //read the token and check if it exists
    const testToken = req.headers.authorization
    
    if (testToken && testToken.startsWiths('bearer')) {
        token = testToken.split('')[1];
        return next()
    }
 
    if (!token) {
        res.status(404).json({
            message:"you are not allowed to login"
        })
        next()
    }
    // validate the token
    const decodedToken = await jwt.verify(token, process.env.json_Secret)
    
    // check if the user exits or not
    const user = await onboardingmodel.findById(decodedToken.id)
    if (!user) {
        res.status(401).json({
            message:"the user with given id does not exists"
        }) 
        next()
    }
    // check if user changed password after token was issued

    


}
