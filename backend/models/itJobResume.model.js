import mongoose from "mongoose";

const itJobResumeSchema
 = new mongoose.Schema({
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
  skills: {
    type: [String],
    default: []
  },
  projects: {
    type: [
      {
        title: String,
        description: String,
        technologies: [String],
        url: String
      }
    ],
    default: []
  },
  experience: {
    type: [
      {
        company: String,
        role: String,
        startDate: String,
        endDate: String,
        responsibilities: [String]
      }
    ],
    default: []
  },
  accomplishment: {
    type: [String], 
    default: []
  }
}, { timestamps: true });

export const ItJobResume = mongoose.model("ItJobResume", itJobResumeSchema);
