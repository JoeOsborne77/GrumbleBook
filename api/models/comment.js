const mongoose = require('mongoose');

const CommentSchema = new mongoose.Schema({
  message: {
    type: String,
    required: true,
  },
  commentUserId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  commentPostId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Post'
  },
  commentCreated: {
    type: Date,
    default: Date.now,
  },
})

const Comment = mongoose.model('Comment', CommentSchema);

module.exports = Comment;