const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  code: {
    type: Number,
    required: true
  },
 
  password: {
    type: String,
    required: true
  }, 
  role: {
    type: String,
    required: true,
    default:'Admin'
  }
});

module.exports = mongoose.model('User', userSchema);
