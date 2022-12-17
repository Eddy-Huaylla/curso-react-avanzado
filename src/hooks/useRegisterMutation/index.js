import { useMutation } from '@apollo/client';
import REGISTER_USER from '../../graphql/user/mutations/register-user.gql'

export const useRegisterMutation = () => {
	const updateSessions = (cache, { data }) => {
		cache.reset()
		console.log( cache, data )
	};
	const [ registerMutation , { data : dataRegister, loading : loadingRegister, error : errorRegister } ] = useMutation( REGISTER_USER, {
		update : updateSessions
	} );

	return {
		registerMutation,
		dataRegister,
		loadingRegister,
		errorRegister
	};
};
