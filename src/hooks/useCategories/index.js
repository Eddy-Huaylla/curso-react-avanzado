import { useEffect, useState } from "react"

export const useCategories = () => {
	const [ categories, setCategories ] = useState( [] )
	const [ loading, setLoading ] = useState( false )
	const [ error, setError ] = useState( false )
	const [ msgError, setMsgError ] = useState( '' )

	useEffect(function () {
		setLoading(true)
		window.fetch('https://petgram-server-jhe-eddy-huaylla.vercel.app/categories')
		.then( res => res.json() )
		.then( response => {
			setCategories( response )
			setLoading( false )
		})
		.catch( error => {
			setError( true )
			setMsgError( error )
		})
	}, [])

	return {
		categories,
		loading,
		error,
		msgError
	}
}
