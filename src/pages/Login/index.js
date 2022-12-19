import React, { useContext } from "react"
import { useNavigate } from "react-router-dom"

import AuthContext from "../../context/AuthContext"

import { UserForm } from "../../components/UserForm"

import { useRegisterMutation } from "../../hooks/useRegisterMutation"
import { useLoginMutation } from "../../hooks/useLoginMutation"
import { Layout } from "../../components/Layout"

export default () => {
	const { activateAuth } = useContext( AuthContext )
	const navigate         = useNavigate()

	const { registerMutation, loadingRegister, errorRegister } = useRegisterMutation()
	const { loginMutation, loadingLogin, errorLogin }          = useLoginMutation()


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
		<Layout title='Login' subtitle='Inicia session para ver un mundo nuevo'>
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
		</Layout>
	)
}
