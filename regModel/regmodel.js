const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const regSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      require: true,
    },

    email: {
        type: String,
        unique: true,
      require: true,
    },
    password: {
      type: String,
      require: true,
    },
    isAdmin: {
      type: String,
      require: true,
      default: false,
    },
    role: {
      type: String,
      enum: ["Teacher", "Student"],
      require: true,
    },
  },
  { timestamps: true }
);

// regSchema.pre('save', async function (next) {
//     this.password = await bcrypt.hash(this.password, 12)
//     next()
// })
const regModel = mongoose.model("schoolApp", regSchema);
module.exports = regModel;
