const mongoose = require('mongoose');
const Student = require('../models/student');
const Course = require('../models/course');
require('../index');

// Delete a student
async function deleteStudent(email) {
  const student = await Student.findOneAndDelete({ email });
  console.log("Deleted Student:", student);
}

// Delete a course
async function deleteCourse(courseName) {
  const course = await Course.findOneAndDelete({ courseName });
  console.log("Deleted Course:", course);
}

deleteStudent('john@example.com');
// deleteCourse('Mathematics');
