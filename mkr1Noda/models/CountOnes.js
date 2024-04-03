const mongoose = require('mongoose');

const CountOnesSchema = new mongoose.Schema({
  number: {
    type: Number,
    required: true
  },
  count: {
    type: Number,
    required: true
  }
});

const CountOnes = mongoose.model('CountOnes', CountOnesSchema);

module.exports = CountOnes;
