const mongoose= require("mongoose")

const mySchema = new mongoose.Schema({
    name: {
        type: String,
        require:true
        
    },
    department: {
        type: String,
        enum: ['backend', 'frontend'],
        require:true
    },
    photos: {
        type: Array,
        require:true
        
    }
}, { timestamps: true })
const mymulter= mongoose.model('mymulter',  mySchema)
module.exports= mymulter
