const mongoose = require('mongoose');

const BreedSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please add a breed name'],
    unique: true,
    trim: true,
  },
  description: {
    type: String,
    required: false,
  },
  origin: {
    type: String,
    required: false,
  },
  temperament: {
    type: String,
    required: false,
  },
  life_span: {
    type: String,
    required: false,
  },
  weight: {
    type: String,
    required: false,
  },
  height: {
    type: String,
    required: false,
  },
  image: {
    type: String,
    required: false,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Breed', BreedSchema);
