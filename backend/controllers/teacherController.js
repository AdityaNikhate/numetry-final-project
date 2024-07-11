import { TeacherResume } from "../models/teacherResume.model.js";

export const makeTeacherResumeEntry = async (req, res)=>{
  try {
    const {userId, name, aboutus, contact, email, education, skill, experience, References} = req.body;
    if(!userId || !name || !aboutus || !contact || !email || !education || !skill || !experience){
      return res.status(400).json({
        message: "All fields are require",
        success: false
      })
    }

    await TeacherResume.create({
      userId,
      name,
      aboutus,
      contact,
      email,
      education,
      skill,
      experience,
      References
    });

    return res.status(200).json({
      message: "Successfully added you information.",
      success: true
    });
  } catch (error) {
    console.error(`Error in Teacher Resume add ${error}`)
  }
}

export const findTeacherResumeForSpecificUser = async (req, res)=>{
  try {
    const {userId} = req.body;
    const data = await TeacherResume.find({userId:userId});
    console.log(data)
    return res.status(200).json({
      message: data,
      success:true
    })
  } catch (error) {
    console.error(`Error occure in Teacher Jobs specific user: ${error}`)
  }
}