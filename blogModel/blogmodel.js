// title, decription // comment

const mongoose = require ("mongoose")
const blogModel = new mongoose. Schema({
    title: {
        type: String
        
    },
    content: {
        type: String
        
    },

    comments: [{
      type: mongoose.SchemaTypes.ObjectId,
        ref:"comments"
    }]
      
        
     

},{timestamps:true})

const blog = mongoose.model("blog", blogModel)
module.exports= blog