import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloClient } from 'apollo-client';
import { ApolloProvider } from '@apollo/react-hooks';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';
import App from './components/App';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { signIn, signUp } from './components/Auth';

const cache = new InMemoryCache();
const link = new HttpLink({
	uri: 'http://localhost:4000/',
});

const client = new ApolloClient({
	cache,
	link,
});

ReactDOM.render(
	<ApolloProvider client={client}>
		<Router>
			<Switch>
				<Route exact path='/' component={App} />
				<Route path='/signin' component={signIn} />
				<Route exact path='/signup' component={signUp} />
			</Switch>
		</Router>
	</ApolloProvider>,
	document.getElementById('root'),
);
