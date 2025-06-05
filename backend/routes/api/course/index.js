import express from 'express';
import { createCourse, getAllCourses } from '../../../controllers/courseController.js';
import upload from '../../../config/multer.js';
import authMiddleware from '../../../middleware/authMiddleware.js';

const router = express.Router();

router.post('/', upload.single('courseImage'), createCourse);

// Get all courses (GET)
router.get('/', getAllCourses);



export default router;
