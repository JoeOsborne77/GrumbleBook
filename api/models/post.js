const mongoose = require('mongoose');


const PostSchema = new mongoose.Schema({
  created: {
    type: Date,
    default: Date.now,
  },

  agrees: {
    type: Number,
    default: 0,
  },
  disagrees: {
    type: Number,
    default: 0,
  },

  imageURL: String,

  message: {
    type: String,
    validate: {
      validator: function (v) {
        return /^[a-zA-Z0-9~!@#()`;\-':,.?| ]*$/.test(v);
      },
      message: 'Format is incorrect', // There NEEDS to be a message in order to be able to test this, otherwise it will timeout.
    },
    required: [true],
  },

  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }

});

const Post = mongoose.model('Post', PostSchema);

module.exports = Post;
