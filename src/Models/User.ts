import mongoose, { Schema } from "mongoose";
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      required: true
    },
    lastName:{
      type: String,
      trim: true,
      required: true
    },
    idade:{
      type: String,
      trim: true,
      required: true
    },
    email: {
      type: String,
      unique: true,
      lowercase: true,
      trim: true,
      required: true
    },
    hash_password: {
      type: String
    },
    created: {
      type: Date,
      default: Date.now
    }
  },
  {
    versionKey: false,
  }
);

userSchema.methods.comparePassword = function(password:any){
  return bcrypt.compareSync(password, this.hash_password)
}

const User = mongoose.model("User", userSchema);

export default User;