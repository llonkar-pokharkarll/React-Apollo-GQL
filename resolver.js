import Recipe from './models/receipe';
import User from './user';
import { ApolloError } from 'apollo-server';

export const resolvers = {
  Query: {
    getAllUser: () => { },
    getAllRecipe: async (root, args, { Recipe }) => {
      const allRecipes = await Recipe.find();
      return allRecipes;
    }
  },

  Mutation: {
    addRecipe: async (Parent, { name, category, description, instructions, username }, { Recipe }) => {
      try {
        const newRecipe = await new Recipe({
          name, category, description, instructions, username
        }).save();
        console.log(newRecipe);
        return newRecipe;
      }
      catch (err) {
        console.log(err);
        throw new ApolloError('Network Error', 400, err);
      }
    },

    addUser: async (Parent, { }, { User }) => {
      try {
        const newUser = await new User({
        }).save();
        console.log(newUser);
        return newUser;
      }
      catch (err) {
        console.log(err);
        throw new ApolloError('Network Error', 400, err);
      }
    },
  },
};