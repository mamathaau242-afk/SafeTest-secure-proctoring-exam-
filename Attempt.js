const mongoose = require('mongoose');

const AttemptSchema = new mongoose.Schema({
  studentName: { type: String, required: true },
  regNo: { type: String, required: true }, 
  bisScore: { type: Number, required: true },
  violations: [
    {
      action: String,
      time: String
    }
  ],
  date: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Attempt', AttemptSchema);