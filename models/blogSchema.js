const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  articleBody: {
    type: String,
    required: true,
  },
  categories: [{
    type: String,
  }],
}, {
  timestamps: true,
});

const Blog = mongoose.model('Blog', blogSchema);

module.exports = Blog;
