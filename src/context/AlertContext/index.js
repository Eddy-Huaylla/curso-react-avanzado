import React, { createContext, useState } from "react";

export const AlertContext = createContext()

export const AlertProvider = ( { children } ) => {
	const [ show, setShow ] = useState( false )
	const [ message, setMessage ] = useState( '' )

	const value = {
		show,
		message,
		activate : ( message ) => {
			setShow( true )
			setMessage( message )
		},
		desactivate : () => setShow( false )
	}

	return (
		<AlertContext.Provider value={ value }>
			{ children }
		</AlertContext.Provider>
	)
}
