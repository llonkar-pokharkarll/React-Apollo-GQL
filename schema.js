import { gql } from 'apollo-server';
export const typeDefs = gql`
type Recipe {
  _id:ID
  name:String!
  category:String!
  description:String!
  instructions:String!
  createdDate:String
  likes:Int
  username:String!
}

type User {
  _id:ID
  username:String!
  password:String!
  email:String!
  joinDate:String!
  favourites :[Recipe]
}

type Query {
  getAllRecipe : [Recipe]
  getAllUser : [User]
}

type Mutation {
  addRecipe (input:RecipeInput) : Recipe
  addUser (input:UserInput) : User
}

input UserInput {
  username:String!
  password:String!
  email:String!
  joinDate:String!
}

input RecipeInput {
  name:String!
  category:String!
  description:String!
  instructions:String!
  username:String!
} 
`;