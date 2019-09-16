import mongoose from 'mongoose';
const schema = mongoose.Schema;

const RecipeSchema = new schema({
  name: {
    type: String,

  },
  category: {
    type: String,

  },
  description: {
    type: String,

  },
  instructions: {
    type: String,

  },
  createdDate: {
    type: Date,
    default: Date.now
  },
  likes: {
    type: Number,
    default: 0
  },
  username: {
    type: String,

  },
});

export const Recipe = mongoose.model('Recipe', RecipeSchema);
