import React from "react"
import { Form, Input, Button, Title, Span } from './styles'

import { useForm } from "../../hooks/useForm"

export const UserForm = ( { title, submit : handleSubmit, loading = false, messageError = null } ) => {
	const { ref, submit } = useForm();

	const onSubmit = ( e ) => {
		e.preventDefault()
		const formEntries = submit( ref )
		handleSubmit( formEntries );
	}

	return (
		<>
			<Title>{ title }</Title>
			{ messageError && <Span> { messageError }</Span>}
			<Form ref={ ref } onSubmit = { onSubmit }>
				<Input type='text' name='email' placeholder='Email' />
				<Input type='password' name='password' placeholder='Password' />
				<Button type='submit' disabled = { loading }>{ title }</Button>
			</Form>
		</>
	)
}

