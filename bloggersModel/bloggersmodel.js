const mongoose = require("mongoose")

const  bloggersModel= new mongoose.Schema({
    title: {
        type: String
    },
    content: {
        type:String
    },
    comments: [{
        type: mongoose.SchemaTypes.ObjectId,
        ref:"comments"
  }]


}, { timestamps: true })

const bloggeruser = mongoose.model('blogger', bloggersModel)
module.exports=bloggeruser