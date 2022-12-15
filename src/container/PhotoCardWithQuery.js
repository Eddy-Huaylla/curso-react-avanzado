import React from 'react'
import { PhotoCard } from '../components/PhotoCard'
import { Query } from '@apollo/client/react/components';
import GET_PHOTO from '../graphql/photo/queries/get-photo.gql'

export const PhotoCardWithQuery = ( { id } ) => (
	<Query query = { GET_PHOTO } variables = { { id } } >
		{
			( { loading, error, data } ) => {
				const { photo } = data || { photo: {} };

				if( error ) return <h2> Internal Server Error </h2>

				return loading ? <PhotoCard /> : <PhotoCard {...photo} />
			}
		}
	</Query>
)
