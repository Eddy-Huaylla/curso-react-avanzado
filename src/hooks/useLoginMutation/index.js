import { useMutation } from '@apollo/client'
import LOGIN_USER from '../../graphql/user/mutations/login-user.gql'

export const useLoginMutation = () => {
	const [ loginMutation , { data : dataLogin, loading : loadingLogin, error : errorLogin } ] = useMutation( LOGIN_USER )

	return {
		loginMutation,
		dataLogin,
		loadingLogin,
		errorLogin
	}
}
