const mongoose = require('mongoose');
const Student = require('../models/student');
require('../index');

// Update student info
async function updateStudentName(email, newName) {
  const student = await Student.findOneAndUpdate(
    { email },
    { name: newName },
    { new: true }
  );
  console.log("Updated Student:", student);
}

updateStudentName('john@example.com', 'Johnathan Doe');
