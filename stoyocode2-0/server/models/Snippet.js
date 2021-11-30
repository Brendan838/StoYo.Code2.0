const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

// Do we need the createdAt object?
  //Do we want to keep the comment option?

const snippetSchema = new Schema({
  snippetText: {
    type: String,
    required: 'You need to leave a snippet!',
    minlength: 1,
    maxlength: 280,
    trim: true,
  },
  snippetAuthor: {
    type: String,
    required: true,
    trim: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    get: (timestamp) => dateFormat(timestamp),
  },
});

const Snippet = model('Snippet', snippetSchema);

module.exports = Snippet;
