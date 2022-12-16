import React, { useContext } from "react"
import { useNavigate } from "react-router-dom";
import { Form, Input, Button, Title } from './styles'

import AuthContext from "../../context/AuthContext";

import { useForm } from "../../hooks/useForm"

export const UserForm = ( { title } ) => {
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
			<Title>{ title }</Title>
			<Form ref={ ref } onSubmit = { onSubmit }>
				<Input type='text' name='email' placeholder='Email' />
				<Input type='password' name='password' placeholder='Password' />
				<Button type='submit'>{ title }</Button>
			</Form>
		</>
	)
}

