const mongoose = require('mongoose');
const Student = require('../models/student');
const Course = require('../models/course');
require('../index');  // Assuming your db connection is in index.js

// Create a course
async function createCourse() {
  const course = new Course({
    courseName: "Mathematics",
    instructor: "Dr. Smith",
    credits: 4
  });

  // Save the course and return it
  const savedCourse = await course.save();
  console.log("Course Created:", savedCourse);
  return savedCourse;  // Return the saved course object
}

// Create a student
async function createStudent(courseIds) {
  const student = new Student({
    name: "John Doe",
    email: "john@example.com",
    age: 21,
    enrolledCourses: courseIds
  });

  await student.save();
  console.log("Student Created:", student);
}

async function run() {
  const course = await createCourse();  // Get the course object after it's saved
  await createStudent([course._id]);    // Pass the course _id to createStudent
}

run();
