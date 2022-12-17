import React from "react";
import { createRoot } from 'react-dom/client';
import { ApolloClient, ApolloProvider, concat, createHttpLink, InMemoryCache } from "@apollo/client";
import { setContext } from '@apollo/client/link/context'
import { onError } from '@apollo/client/link/error'

import { AuthProvider } from './context/AuthContext'

import { App } from "./App";
import { AlertProvider } from "./context/AlertContext";

const httpLink = createHttpLink( {
	uri : "https://petgram-server-jhe-eddy-huaylla.vercel.app/graphql"
} )

const authLink = setContext( ( _, { headers } ) => {
	const token = window.localStorage.getItem('token')

	return {
		headers: {
			...headers,
			authorization : ( token && token !== '""' ) ? `Bearer ${ JSON.parse( token ) }` : ''
		}
	}
})

const errorMiddleware = onError( ( { networkError } ) => {
	if ( networkError && networkError.result.code === 'invalid_token' ) {
		window.localStorage.removeItem( 'token' )
		window.location = '/user'
	}
} )

const client = new ApolloClient( {
	link  : authLink.concat( concat( errorMiddleware, httpLink ) ),
	cache : new InMemoryCache(),
} );



const container = document.getElementById('app');
const root      = createRoot(container);
root.render(
	<AuthProvider>
		<AlertProvider>
			<ApolloProvider client = { client }>
				<App />
			</ApolloProvider>
		</AlertProvider>
	</AuthProvider>
);
