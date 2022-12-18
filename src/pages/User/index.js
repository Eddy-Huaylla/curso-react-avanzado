import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Layout } from "../../components/Layout";
import { SubmitButton } from "../../components/submitButton";
import AuthContext from "../../context/AuthContext";

export default () => {
	const navigate            = useNavigate()
	const { desactivateAuth } = useContext( AuthContext )

	const handleSubmit = e => {
		e.preventDefault()
		desactivateAuth()
		navigate('/')
	}

	return (
		<Layout title = 'Mi cuenta' subtitle = 'Mi cuenta'>
			<SubmitButton onClick = { handleSubmit }>Cerra Sesión</SubmitButton>
		</Layout>
	)
}
