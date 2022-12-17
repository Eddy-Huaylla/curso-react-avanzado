import React from "react"
import { Form, Input, Title, Span } from './styles'

import { useForm } from "../../hooks/useForm"
import { SubmitButton } from "../submitButton";

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
				<SubmitButton type='submit' disabled = { loading }>{ title }</SubmitButton>
			</Form>
		</>
	)
}

