import { useMutation } from '@apollo/client'
import ADD_LIKE_PHOTO from '../../graphql/photo/mutations/add-like-photo.gql'

export const useMuationToogleLike = () => {
	const [ mutation, { loading: mutationLoading, error: mutationError } ] = useMutation( ADD_LIKE_PHOTO )

	return {
		mutation,
		mutationLoading,
		mutationError
	}
}
