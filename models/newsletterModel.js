const mongoose = require('mongoose');
const validator = require('validator');

const newsLetterSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: [true, 'Please provide your email'],
      unique: true,
      lowercase: true,
      validate: [validator.isEmail, 'Please provide a valid email']
    }
  },
  //) Make sure when we have a field not stored in the database but calculated later show up in the Database
  {
    toJSON: {
      virtuals: true
    },
    toObject: {
      virtuals: true
    }
  }
);

const NewsLetter = mongoose.model('NewsLetter', newsLetterSchema);

module.exports = NewsLetter;
