
import { useQuery } from '@apollo/client'
import GET_FAVORITES from '../../graphql/photo/queries/get-favorites.gql'

export const useFavorites = () => {
	const { data, error, loading } = useQuery( GET_FAVORITES, { fetchPolicy: 'cache-and-network' } )

	const favorites = data?.favs || []

	return {
		favorites,
		loadingFavorites : loading,
		errorFavorites   : error
	}
}
