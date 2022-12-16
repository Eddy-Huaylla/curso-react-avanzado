import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "../../context/AuthContext";

export const Login = () => {
	const navigate         = useNavigate()
	const { activateAuth } = useContext( AuthContext )

	const handleSubmit = e => {
		e.preventDefault()
		activateAuth()
		navigate('/user')
	}

	return (
		<section>
			<h1>Register</h1>
			<form onSubmit = { handleSubmit } >
				<button>Iniciar Sesión</button>
			</form>
		</section>
	)
}
