import React, { createContext, useReducer } from 'react'
import { useLocalStorange } from '../../hooks/useLocalStorange'
import reducer from './reducer'

const AuthContext = createContext()

export const AuthProvider = ( { children } ) => {
	const { value : token, setLocalStorage : setToken } = useLocalStorange( 'token', '' )

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
		},
		desactivateAuth: ( token ) => {
			dispatch(
				{
					type    : 'IS_AUTH',
					payload : false
				}
			)
			setToken( token )
		}
	}

	return (
		<AuthContext.Provider value = { value }>
			{ children }
		</AuthContext.Provider>
	)
}

export default AuthContext

