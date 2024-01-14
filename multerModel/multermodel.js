const mongoose= require("mongoose")

const userSchema = new mongoose.Schema({
    fullname: {
        type: String,
        require:true
    },
    stack: {
        type: String,
        enum: [ 'Backend', 'Frontend'],
        require:true
    },
    profileImage: {
        type:String,
        require:true
    }


}, { timestamps: true })
const User = mongoose.model('User', userSchema)
module.exports= User