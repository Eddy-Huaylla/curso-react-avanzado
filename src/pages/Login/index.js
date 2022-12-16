import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

import AuthContext from "../../context/AuthContext";

import { UserForm } from "../../components/UserForm";

import { useRegisterMutation } from "../../hooks/useRegisterMutation";

export const Login = () => {
	const { activateAuth }     = useContext( AuthContext )
	const { registerMutation, loadingRegister, errorRegister } = useRegisterMutation()
	const navigate             = useNavigate()

	const [ token, setToken ] = useState( '' )

	const submitRegister = ( fields ) => {
		console.log( fields );
		registerMutation( { variables : {
			input : fields
		} } )
		.then( response => {
			setToken( response.data.signup )
			submitAuth( fields )
		})
	}

	const submitAuth = ( fields ) => {
		activateAuth()
		navigate('/user')
		console.log( 'fields', fields );
	}

	return (
		<section>
			<UserForm
				title  = "Registrarse"
				submit = { submitRegister }
				loading = { loadingRegister }
				messageError = { errorRegister?.message }
			/>
			<UserForm
				title  = "Iniciar sesión"
				submit = { submitAuth }
			/>
		</section>
	)
}
