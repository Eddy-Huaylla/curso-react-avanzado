import { useMutation } from '@apollo/client';
import REGISTER_USER from '../../graphql/user/mutations/register-user.gql'

export const useRegisterMutation = () => {
	const [ registerMutation , { data : dataRegister, loading : loadingRegister, error : errorRegister } ] = useMutation( REGISTER_USER );

	return {
		registerMutation,
		dataRegister,
		loadingRegister,
		errorRegister
	};
};
