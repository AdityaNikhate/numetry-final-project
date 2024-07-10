import express from 'express'
import { findTeacherResumeForSpecificUser, makeTeacherResumeEntry } from '../controllers/teacherController.js';

const router = express.Router();
router.post('/addteacher', makeTeacherResumeEntry)
router.post("/getteacher", findTeacherResumeForSpecificUser)

export default router;