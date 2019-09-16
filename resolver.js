import { ApolloError } from 'apollo-server';
import * as jwt from 'jsonwebtoken';

const createToken = ({ username, email }, secret, expiresIn) => {
  return jwt.sign({ username, email }, secret, { expiresIn });
}

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
        console.log(name, category, description, instructions, username);
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

    // addUser: async (Parent, { username, email, password }, { User }) => {
    //   try {
    //     console.log(username, email, password);
    //     const newUser = await new User({
    //     }).save();
    //     console.log(newUser);
    //     return newUser;
    //   }
    //   catch (err) {
    //     console.log(err);
    //     throw new ApolloError('Network Error', 400, err);
    //   }
    // },

    signUp: async (Parent, { username, email, password }, { User }) => {
      console.log("In SignUp", username, email, password);
    },
  },

};