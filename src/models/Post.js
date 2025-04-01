const { ObjectId } = require("mongodb");

const postSchema = {
  title: String,
  content: String,
  author: String,
};

module.exports = { postSchema, ObjectId };
