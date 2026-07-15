const mongoose = require('mongoose');

const AttemptSchema = new mongoose.Schema({
  studentName: { 
    type: String, 
    required: true 
  },
  regNo: { 
    type: String, 
    required: true 
  },
  bisScore: { 
    type: Number, 
    required: true 
  },
  violations: [
    {
      action: String,
      time: String,
      severity: {
        type: String,
        enum: ['low', 'medium', 'high'],
        default: 'medium'
      }
    }
  ],
  answers: {
    type: Map,
    of: String,
    default: new Map()
  },
  timeSpent: {
    type: Number,
    default: 0
  },
  submittedAt: {
    type: Date,
    default: Date.now
  },
  metadata: {
    userAgent: String,
    ipAddress: String,
    browserInfo: String
  },
  date: { 
    type: Date, 
    default: Date.now,
    index: true
  }
});

// Create compound index for faster queries
AttemptSchema.index({ regNo: 1, date: -1 });
AttemptSchema.index({ studentName: 1 });

module.exports = mongoose.model('Attempt', AttemptSchema);
