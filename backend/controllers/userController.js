import { User } from "../models/user.model.js";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";

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

export const login = async (req, res) => {
  try {
      const { username, password } = req.body;
      if (!username || !password) {
          return res.status(400).json({ message: "All fields are required" });
      };
      const user = await User.findOne({ username });
      if (!user) {
          return res.status(400).json({
              message: "Incorrect username or password",
              success: false
          })
      };
      const isPasswordMatch = await bcryptjs.compare(password, user.password);
      if (!isPasswordMatch) {
          return res.status(400).json({
              message: "Incorrect username or password",
              success: false
          })
      };
      const tokenData = {
          userId: user._id
      };

      const token = await jwt.sign(tokenData, process.env.JWT_SECRET_KEY, { expiresIn: '1d' });

      return res.status(200).cookie("token", token, { maxAge: 1 * 24 * 60 * 60 * 1000, httpOnly: true, sameSite: 'strict' }).json({
          _id: user._id,
          username: user.username,
          fullName: user.fullname
      });

  } catch (error) {
      console.log(error);
  }
}

export const logout = (req, res) => {
  try {
    res.clearCookie("token", { httpOnly: true, sameSite: 'strict' });
    return res.status(200).json({
      message: "Successfully logged out",
      success: true
    });
  } catch (error) {
    console.log(`Error in logout: ${error}`);
    return res.status(500).json({
      message: "Internal Server Error",
      success: false
    });
  }
};


export const forgotPassword = async (req, res) => {
  try {
    const { username, newPassword, confirmNewPassword } = req.body;
    if (!username || !newPassword || !confirmNewPassword) {
      return res.status(400).json({
        message: "All fields are required",
        success: false
      });
    }

    if (newPassword !== confirmNewPassword) {
      return res.status(400).json({
        message: "Passwords do not match",
        success: false
      });
    }

    const user = await User.findOne({ username });
    if (!user) {
      return res.status(400).json({
        message: "User with this username does not exist",
        success: false
      });
    }

    const hashedPassword = await bcryptjs.hash(newPassword, 16);

    user.password = hashedPassword;
    await user.save();

    return res.status(200).json({
      message: "Password successfully updated",
      success: true
    });

  } catch (error) {
    console.log(`Error in forgotPassword: ${error}`);
    return res.status(500).json({
      message: "Internal Server Error",
      success: false
    });
  }
};
