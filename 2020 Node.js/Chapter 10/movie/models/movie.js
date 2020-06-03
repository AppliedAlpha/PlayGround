const mongoose = require('mongoose');

const MovieSchema = new mongoose.Schema({
    title: {
      type: String,
      trim: true,
      required: true,
    },
    director: {
      type: String,
      trim: true,
      required: true,
    },
    year: {
      type: Number,
    },
    created: {
      type: Date,
      default: Date.now,
    },
  });

  module.exports = mongoose.model("movie", MovieSchema);