const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true
    },
    overview: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    board: {
      type: String,
      required: true
    },
    class: {
      type: Number,
      required: true
    },
    subjects: {
      type: [String],
      required: true
    },
    imageURL: {
      type: String,
      required: true
    },
    type: {
      type: String,
      required: true // like full class course, full subject course , or monthly subject course
    },
    price: {
      type: Number,
      required: true
    },
    discountedPrice: {
      type: Number,  
      default: 0
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model('Course', courseSchema);
