const mongoose = require("mongoose")
const bcrypt = require ("bcrypt")
const validator = require("validator")
const userSchema = new mongoose.Schema({

    name: {
        type: String,
          required:  [true, "please enter your name"]
    },
    
    email: {
       type:String  ,
       required:[true,"please enter your email"],
        unique: true,
        lowercase: true,
       validate:[validator.isEmail,"please enter your email"]

    },

    photo: String,
    password: {
        type: String,
        require:[true, "please enter your  password"],
        minlength:8
    },
    comfirmPassword: {
        type: String, 
        require: [true, "please comfirm your password"],
        validate: {
            // this validator will only work for create and save method.
            validator: function (val) {
                return val == this.password
            },
            message:"password and confirm password does not match"
        }
    }

})

userSchema.pre('save', async  function(next){
    if (!this.isModified('password')) return next();
    // encrypting of password
    this.password = await bcrypt.hash(this.password, 12);
    // not saving the comfirm password in the database but only cheking it to compare with the password
    this.comfirmPassword = undefined;
    next()
})


const user = mongoose.model("user", userSchema)
module.exports= user