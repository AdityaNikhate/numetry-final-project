import mongoose from "mongoose";

const teacherResumeSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true
  },
  name: {
    type: String,
    required: true
  },
  aboutus: {
    type: String,
  },
  contact: {
    type: String,
    required: true
  },
  email:{
    type: String,
    require: true
  },
  education: {
    type: [
      {
        institution: String,
        degree: String,
        startDate: String,
        endDate: String,
        grade: String
      }
    ],
    default: []
  },
  skill: {
    type: [String],
    default: []
  },
  experience: {
    type: [
      {
        School: String,
        role: String,
        startDate: String,
        endDate: String,
        responsibilities: [String]
      }
    ],
    default: []
  },
  References: {
    type: [{
      name: String,
      position: String,
      contact: String
    }], 
    default: []
  }
}, { timestamps: true });

export const TeacherResume = mongoose.model("TeacherResume", teacherResumeSchema);
