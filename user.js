import mongoose from 'mongoose';

const schema = mongoose.Schema;

const UserSchema = new schema({
  username: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  joinDate: {
    type: Date,
    default: Date.now
  },
  favorites: {
    type: [schema.Types.ObjectID],
    ref: 'Recipe'
  }
});

export const User = mongoose.model('User', UserSchema);