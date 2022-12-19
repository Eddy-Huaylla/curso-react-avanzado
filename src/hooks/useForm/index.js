import { useRef } from "react"

export const useForm = () => {
	const ref = useRef( null )

	const getValues = ( form_ref ) => {
		const formData = new FormData( form_ref.current )
		return Object.fromEntries( formData )
	}

	const submit = ( form_ref) => {
		const formEntries = getValues( form_ref )

		return formEntries
	}

	return {
		ref,
		submit
	}
}
