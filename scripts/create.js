const mongoose = require('mongoose');
const Student = require('../models/student');
const Course = require('../models/course');
require('../index');

// Create a course
async function createCourse() {
  const course = new Course({
    courseName: "Mathematics",
    instructor: "Dr. Smith",
    credits: 4
  });
  await course.save();
  console.log("Course Created:", course);
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
  const course = await createCourse();
  await createStudent([course._id]);
}

run();
