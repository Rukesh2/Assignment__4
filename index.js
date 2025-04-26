const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/student_management', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('MongoDB connected.');
}).catch(err => console.log(err));
