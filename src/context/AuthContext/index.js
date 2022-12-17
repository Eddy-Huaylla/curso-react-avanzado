import React, { createContext, useReducer } from 'react'
import { useLocalStorange } from '../../hooks/useLocalStorange'
import reducer from './reducer'

const AuthContext = createContext()

export const AuthProvider = ( { children } ) => {
	const { value : token, setLocalStorage : setToken, removeLocalStorange } = useLocalStorange( 'token', '' )

	const [ state, dispatch ] = useReducer(
		reducer,
		{
			isAuth : ( token ) ? true : false
		}
	)

	const value = {
		isAuth       : state.isAuth,
		activateAuth : ( token ) => {
			dispatch( {
				type    : 'IS_AUTH',
				payload : true
			} )
			setToken( token )
			__APOLLO_CLIENT__.resetStore()
		},
		desactivateAuth: () => {
			dispatch(
				{
					type    : 'IS_AUTH',
					payload : false
				}
			)
			removeLocalStorange()
			__APOLLO_CLIENT__.resetStore()
		}
	}

	return (
		<AuthContext.Provider value = { value }>
			{ children }
		</AuthContext.Provider>
	)
}

export default AuthContext

