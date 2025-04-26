const mongoose = require('mongoose');
const Student = require('../models/student');
require('../index');

// Fetch all students
async function fetchStudents() {
  const students = await Student.find();
  console.log(students);
}

// Fetch students with enrolled course details
async function fetchStudentsWithCourses() {
  const students = await Student.aggregate([
    {
      $lookup: {
        from: 'courses',
        localField: 'enrolledCourses',
        foreignField: '_id',
        as: 'courses'
      }
    }
  ]);
  console.log(JSON.stringify(students, null, 2));
}

fetchStudentsWithCourses();
