import React from "react";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";

import "./App.scss";

import BookList from "./components/BookList";
import AddBook from "./components/AddBook";

//apollo client
const client = new ApolloClient({
	uri: "http://localhost:4000/graphql"
});

function App() {
	return (
		<ApolloProvider client={client}>
			<div id="main" className="container m-5">
				<h1 className="text-center">Example header</h1>
			</div>
		</ApolloProvider>
	);
}

export default App;
