import { Timestamp } from "mongodb";
import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  fullname:{
    type:String,
    require:true
  },
  username:{
    type:String,
    require:true,
    unique:true
  },
  password:{
    type:String,
    require:true
  },
  profilephoto:{
    type:String,
    default:""
  },
  gender:{
    type: String,
    enum:["male","female"],
    requier:true
  }
}, {Timestamp:true});

export const User = mongoose.model("User",userSchema);