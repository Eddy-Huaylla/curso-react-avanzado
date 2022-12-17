import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { SubmitButton } from "../../components/submitButton";
import AuthContext from "../../context/AuthContext";

export const User = () => {
	const navigate         = useNavigate()
	const { desactivateAuth } = useContext( AuthContext )

	const handleSubmit = e => {
		e.preventDefault()
		desactivateAuth()
		navigate('/')
	}

	return (
		<div>
			<h1> Page User</h1>
			<SubmitButton onClick={ handleSubmit }>Cerra Sesión</SubmitButton>
		</div>
	)
}
