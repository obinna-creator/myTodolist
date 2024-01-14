const mongoose = require("mongoose")
const validator = require("validator")
const bcrypt= require("bcrypt")
//name, email,password, comfirmpassword,photo

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        require:[true," please enter your name"]
    },
    email: {
        type: String,
        require: [true, "please enter your email"],
        unique: true,
        lowercase: true,
     validate:[validator.isEmail,"please enter a valid email"]
    },
    photo: String,
    password: {
        type: String,
        require: [true, "please enter your password"],
        minlength: 8,
        select:false
    },
    comfirmPassword: {
        type:String,
        require: [true, "please comfirm your password"],
        validate: {
            // this validitor only works for save() and create()
            validator: function(val) {
             return   val == this.password
            },
            message:`password and comfirm password does not match`
        }
    }

    
})

userSchema.pre('save', async function (next) {
    // check if the password was modified or updated
    if (!this.isModified('password')) return next() 
        //encrypt the password
    this.password = await bcrypt.hash(this.password, 10)
    // after comfirming the comfirm password, next not saving it
    this.comfirmPassword = undefined;
    next()
    
    
})

// a function that is used to compare password from the request body and from the databse
// first arguemant in the function is the request body and the other is the database
userSchema.methods.comparepasswordInDB = async function (pass, passDB) {
   return await  bcrypt.compare(pass, passDB)
}
const User = mongoose.model("tutorialUser", userSchema);
module.exports = User

// const blogModel=require("../blogModel/blogmodel")
// const commentModel= require("../blogcontrollers/commentModel.js")
