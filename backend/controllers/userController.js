import { User } from "../models/user.model.js";
import bcryptjs from "bcryptjs"

export const register = async (req, res)=>{
  try {
    const {fullname, username, password, confirmPassword, gender} = req.body;
    if(!fullname || !username || !password || !confirmPassword || !gender){
      return res.status(500).json({
        message:"All field are require",
        success: false
      })
    }

    const user = await User.findOne({username});

    if(user){
      return res.status(400).json({
        message:"User already exist try different.",
        success:true
      })
    }

    if(password != confirmPassword){
      return res.status(400).json({
        message:"Password dont match Confirm Password",
        success:false
      })
    }

    const hash_passwort = await bcryptjs.hash(password, 16);

    await User.create({
      fullname, 
      username,
      password: hash_passwort,
      gender
    })

    return res.status(200).json({
      message:`${fullname} you have successfully registered.`,
      success: true
    })

  } catch (error) {
    console.log(`Error in register: ${error}`);
  }
}