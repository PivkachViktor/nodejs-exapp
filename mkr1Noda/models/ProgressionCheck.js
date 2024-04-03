const mongoose = require('mongoose');

const ProgressionCheckSchema = new mongoose.Schema({
  a: {
    type: Number,
    required: true
  },
  b: {
    type: Number,
    required: true
  },
  c: {
    type: Number,
    required: true
  },
  isArithmeticProgression: {
    type: Boolean,
    required: true
  }
});

const ProgressionCheck = mongoose.model('ProgressionCheck', ProgressionCheckSchema);

module.exports = ProgressionCheck;
