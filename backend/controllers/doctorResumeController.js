import { DoctorResume } from "../models/doctorResume.model.js";


export const makeDoctorResumeEntry = async (req, res)=>{
  try {
    const {userId, name, aboutus, contact, email, education, expertise, experience, References} = req.body;
    if(!userId || !name || !aboutus || !contact || !email || !education || !expertise || !experience){
      return res.status(400).json({
        message: "All fields are require",
        success: false
      })
    }

    await DoctorResume.create({
      userId,
      name,
      aboutus,
      contact,
      email,
      education,
      expertise,
      experience,
      References
    });

    return res.status(200).json({
      message: "Successfully added you information.",
      success: true
    });
  } catch (error) {
    console.error(`Error in Doctor Resume add ${error}`)
  }
}

export const findDoctorResumeForSpecificUser = async (req, res)=>{
  try {
    const {userId} = req.body;
    const data = await DoctorResume.find({userId:userId});
    console.log(data)
    return res.status(200).json({
      message: data,
      success:true
    })
  } catch (error) {
    console.error(`Error occure in Teacher Jobs specific user: ${error}`)
  }
}