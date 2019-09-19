import { ApolloError } from 'apollo-server';
import * as jwt from 'jsonwebtoken';

const createToken = ({ username, email }, secret, expiresIn) => {
	return jwt.sign({ username, email }, secret, { expiresIn });
};

export const resolvers = {
	Query: {
		getAllUser: () => {},
		getAllRecipe: async (root, args, { Recipe }) => {
			const allRecipes = await Recipe.find();
			return allRecipes;
		},
	},

	Mutation: {
		addRecipe: async (Parent, args, { Recipe }) => {
			try {
				const { name, category, description, instructions, username } = args.input;
				const newRecipe = await new Recipe({
					name,
					category,
					description,
					instructions,
					username,
				}).save();
				return newRecipe;
			} catch (err) {
				console.log(err);
				throw new ApolloError('Network Error', 400, err);
			}
		},

		signUp: async (Parent, args, { User }) => {
			try {
				const { username, email, password } = args.input;
				const user = await User.findOne({ username });
				if (user) {
					throw new Error('User Exist');
				}
				const newUser = await new User({
					username,
					email,
					password,
				}).save();
				return { token: createToken({ username, email }, process.env.SECRET, '1hr') };
			} catch (err) {
				console.log(err);
				throw new ApolloError('Network Error', 400, err);
			}
		},
	},
};
