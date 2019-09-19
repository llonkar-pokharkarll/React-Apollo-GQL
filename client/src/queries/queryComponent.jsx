import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';

const GET_ALL_RECIPE = gql`
	query {
		getAllRecipe {
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
`;

const Recipes = () => {
	const { data, error, loading } = useQuery(GET_ALL_RECIPE);
	if (loading) return <p>Loading</p>;
	if (error) return <p>{error.message}</p>;
	return <div>{console.log(data)}</div>;
};

export default Recipes;
