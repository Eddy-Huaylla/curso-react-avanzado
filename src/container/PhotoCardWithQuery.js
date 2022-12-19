import React from 'react'
import { PhotoCard } from '../components/PhotoCard'
import { Query } from '@apollo/client/react/components'
import GET_PHOTO from '../graphql/photo/queries/get-photo.gql'

const render = ( { loading, error, data } ) => {
	const { photo } = data || { photo: {} }

	if( error ) return <h2> Internal Server Error </h2>

	return loading ? <PhotoCard id = 'loading' liked = { false } likes = { 0 } /> : <PhotoCard {...photo} />
}

export const PhotoCardWithQuery = ( { id } ) => (
	<Query query = { GET_PHOTO } variables = { { id } } >
		{ render }
	</Query>
)
