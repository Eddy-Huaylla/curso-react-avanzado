import React, { createContext, useReducer } from 'react'
import reducer from './reducer'

const AuthContext = createContext()

export const AuthProvider = ( { children } ) => {
	const [ state, dispatch ] = useReducer( reducer, { isAuth : false } )

	const value = {
		isAuth       : state.isAuth,
		activateAuth : () => {
			dispatch( {
				type    : 'IS_AUTH',
				payload : true
			} )
		},
		desactivateAuth: () => {
			dispatch(
				{
					type    : 'IS_AUTH',
					payload : false
				}
			)
		}
	}

	return (
		<AuthContext.Provider value = { value }>
			{ children }
		</AuthContext.Provider>
	)
}

export default AuthContext

