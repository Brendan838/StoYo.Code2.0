const { Schema, model } = require('mongoose');

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
    snippet: [
        {
          type: Schema.Types.ObjectId,
          ref: 'Snippet',
        },
      ],
})

const Folder = model('Folder', folderSchema);

module.exports = Folder;