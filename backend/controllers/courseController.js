import Course from '../models/Course.js';

export const createCourse = async (req, res) => {
  try {
    const {
      title, overview, description, board,
      class: courseClass, subjects, type,
      price, discountedPrice
    } = req.body;

    const imageURL = req.file.path; // cloudinary image url

    const course = new Course({
      title,
      overview,
      description,
      board,
      class: courseClass,
      subjects: Array.isArray(subjects) ? subjects : subjects.split(','),
      imageURL,
      type,
      price,
      discountedPrice
    });

    await course.save();

    res.status(201).json(course);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getAllCourses = async (req, res) => {
  try {
    console.log("request to fetch all courses");
    const courses = await Course.find(); // latest first
    res.status(200).json(courses);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch courses' });
  }
};
