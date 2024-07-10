import { ItJobResume } from "../models/itJobResume.model.js";

export const makeEntryOfITJobResume = async (req, res)=>{
  try {
    const {userId, name, aboutus, contact, email, education, skill, projects, experience, accomplishment} = req.body;
    if(!userId || !name || !aboutus || !contact || !email || !education || !skill || !projects || !experience){
      return res.status(400).json({
        message: "All fields are require",
        success: false
      })
    }

    await ItJobResume.create({
      userId,
      name,
      aboutus,
      contact,
      email,
      education,
      skill,
      projects,
      experience,
      accomplishment
    })

    return res.status(200).json({
      message: "Successfully added you information.",
      success: true
    })
  } catch (error) {
    console.log(`Error in IT Jobs Resume: ${error}`);
  }
}

export const findITJobResumeForSpecificUser = async (req, res)=>{
  try {
    const {userId} = req.body;
    const data = await ItJobResume.find({userId:userId});
    console.log(data)
    return res.status(200).json({
      message: data,
      success:true
    })
  } catch (error) {
    console.error(`Error occure in IT Jobs specific user: ${error}`)
  }
}