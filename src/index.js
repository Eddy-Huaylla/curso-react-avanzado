import React from "react";
import { createRoot } from 'react-dom/client';
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";

import { AuthProvider } from './context/AuthContext'

import { App } from "./App";

const client = new ApolloClient( {
	uri: "https://petgram-server-jhe-eddy-huaylla.vercel.app/graphql",
	cache: new InMemoryCache(),
} );


const container = document.getElementById('app');
const root = createRoot(container);
root.render(
	<AuthProvider>
		<ApolloProvider client = { client }>
			<App />
		</ApolloProvider>
	</AuthProvider>
);
