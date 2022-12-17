import { useState } from "react"

export const useLocalStorange = ( key, initialValue ) => {
	const [ value, setValue ] = useState( () => {
		try {
			const value = window.localStorage.getItem(key)
			return value !== null ? JSON.parse( value ) : initialValue
		} catch (e) {
			return initialValue
		}
	})

	const setLocalStorage = value => {
		try {
			window.localStorage.setItem( key, JSON.stringify( value ) )
			setValue( value )
		} catch (e) {
			console.error( e )
		}
	}

	const removeLocalStorange = () => {
		try {
			window.localStorage.removeItem( key )
		} catch (e) {
			console.error( e )
		}
	}

	return {
		value,
		setLocalStorage,
		removeLocalStorange
	}
}
