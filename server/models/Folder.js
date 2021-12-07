const { Schema, model } = require('mongoose');
// const Snippet = require('./Snippet');

const folderSchema = new Schema({
  folderName: {
    type: String,
    required: "You need a title for this folder.",
    trim: true
  },

  folderAuthor: {
      type: String,
      required: true,
      trim: true
  },
  // snippets [
  //   {
  //     type: Schema.Types.ObjectId,
  //     ref: 'Snippet',
  //   },
  // ],
})

const Folder = model('Folder', folderSchema);

module.exports = Folder;

