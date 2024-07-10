import express from 'express'
import { findITJobResumeForSpecificUser, makeEntryOfITJobResume } from '../controllers/itResumeCotroller.js';


const router = express.Router();

router.post('/additresume', makeEntryOfITJobResume);
router.post('/getitresume', findITJobResumeForSpecificUser);

export default router;