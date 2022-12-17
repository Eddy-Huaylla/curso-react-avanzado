import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

import AuthContext from "../../context/AuthContext";

import { UserForm } from "../../components/UserForm";

import { useRegisterMutation } from "../../hooks/useRegisterMutation";
import { useLoginMutation } from "../../hooks/useLoginMutation";

export const Login = () => {
	const { activateAuth } = useContext( AuthContext )
	const navigate         = useNavigate()

	const { registerMutation, loadingRegister, errorRegister } = useRegisterMutation()
	const { loginMutation, loadingLogin, errorLogin}           = useLoginMutation()


	const submitRegister = ( fields ) => {
		registerMutation( { variables : {
			input : fields
		} } )
		.then( response => {
			activateAuth( response.data.signup )
			navigate('/user')
		})
	}

	const submitAuth = ( fields ) => {
		loginMutation(
			{
				variables : {
					input : fields
				}
			}
		)
		.then( response => {
			activateAuth( response.data.login )
			navigate('/user')
		} )

	}

	return (
		<section>
			<UserForm
				title        = "Registrarse"
				submit       = { submitRegister }
				loading      = { loadingRegister }
				messageError = { errorRegister?.message }
			/>
			<UserForm
				title        = "Iniciar sesión"
				submit       = { submitAuth }
				loading      = { loadingLogin }
				messageError = { errorLogin?.message }
			/>
		</section>
	)
}
