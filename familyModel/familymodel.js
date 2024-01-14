const mongoose = require("mongoose")

const familySchema = new mongoose.Schema({
    fathersName: {
        type: String,
        require:true
    },
    mothersName: {
          type: String,
        require:true
    },

    childrensName: {
          type: String,
        require:true
    },
     fathersPicture: {
          type: String,
        require:true
    },

     mothersPicture: {
           type: String,
        require:true
    },
    childrensPicture: {
          type: Array,
        require:true
    }
})


const familyuser = mongoose.model("familyuser", familySchema)

module.exports=familyuser

