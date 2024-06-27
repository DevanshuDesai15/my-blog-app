import mongoose from "mongoose";

const articleSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  content: {
    type: Array,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  comments: [
    {
      type: String,
    },
  ],
  upvotes: {
    type: Number,
    default: 0,
  },
});

export default mongoose.model("Article", articleSchema);
