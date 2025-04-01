const { getDB } = require("../config/db");
const { ObjectId } = require("mongodb");

const resolvers = {
  Query: {
    getPosts: async () => {
      const db = getDB();
      return await db.collection("posts").find().toArray();
    },
    getPost: async (_, { id }) => {
      const db = getDB();
      return await db.collection("posts").findOne({ _id: new ObjectId(id) });
    },
  },
  Mutation: {
    createPost: async (_, { title, content, author }) => {
      const db = getDB();
      const newPost = { title, content, author };
      const result = await db.collection("posts").insertOne(newPost);
      return { _id: result.insertedId, ...newPost };
    },
  },
};

module.exports = resolvers;
