import { gql } from 'apollo-server';

export const GET_ALL_RECIPE = gql`
query {
  {
  getAllRecipe{
    _id
    name
    category
    description
    instructions
    createdDate
    likes
    username
    }
}
}
`;