import React, { useContext } from "react"
import { useNavigate } from "react-router-dom";

import AuthContext from "../../context/AuthContext";

import { useForm } from "../../hooks/useForm"

export const UserForm = () => {
	const { activateAuth } = useContext( AuthContext )
	const navigate         = useNavigate()

	const { ref, submit } = useForm();

	const onSubmit = ( e ) => {
		e.preventDefault()
		const formEntries = submit( ref )
		activateAuth()
		navigate('/user')

		console.log( formEntries );
	}

	return (
		<>
			<form ref={ ref } onSubmit = { onSubmit }>
				<input type='text' name='email' placeholder='Email' />
				<input type='password' name='password' placeholder='Password' />
				<button type='submit'>Sing in</button>
				{ console.log('render') }
			</form>
		</>
	)
}

