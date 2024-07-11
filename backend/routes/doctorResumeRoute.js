import express from 'express'
import { findDoctorResumeForSpecificUser, makeDoctorResumeEntry } from '../controllers/doctorResumeController.js';

const router = express.Router();
router.post('/adddoctor', makeDoctorResumeEntry)
router.post("/getdoctor", findDoctorResumeForSpecificUser)

export default router;