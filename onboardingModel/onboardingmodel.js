const mongoose = require("mongoose")
 const validator= require("validator")
const bcrypt= require("bcrypt")
const tasksSchema = new mongoose.Schema({
     firsName: {
        type:String,
    require: [true, "please enter your firstname"],
    lowercase:true
    },

  lastName: {
      type:String,
      require:[true,"please enter your lastname"]
    },
    email: {
        type: String,
        require: [true, "please enter your email"],
        unique: true,
        lowercase: true,
     validate:[validator.isEmail,'please enter a valid email']
    },
    phoneNumber: {
      type: String,
      required:true,
    },
    password: {
      type: String,
      required:true
    },
    comfirmPassword: {
        type: String,
          validate: {
        validator: function(val) {
           return val== this.password
        },
        message:`password and comfirm password does not match`
    }
  
    }
  


})

tasksSchema.pre('save', async function (next) {
    // check if the password was changed or modified before signed up
    if (!this.isModified('password')) return next()
    this.password = await bcrypt.hash(this.password, 7)
    this.comfirmPassword = undefined;
    next()
 })

//a function that is used to compare password from the req.body and from the database
// first arguement in the function is the req.body and the other is the database
tasksSchema.methods.comparepasswordfromDB = async function (pass, passDB) {
  return await bcrypt.compare(pass, passDB)
 }
const createnewtask = mongoose.model("onboarding", tasksSchema)
module.exports = createnewtask