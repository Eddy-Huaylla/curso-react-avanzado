import React from 'react'
import { useQuery } from '@apollo/client';
import { PhotoCard } from '../PhotoCard'
import LIST_PHOTOS from '../../graphql/photo/queries/list-photos.gql'
import LIST_PHOTOS_BY_CATEGORY from '../../graphql/photo/queries/list-photos-by-category.gql'

export const ListOfPhotoCards = ( { categoryId = 0 } ) => {
	const { loading, error, data } = categoryId > 0 ? useQuery( LIST_PHOTOS_BY_CATEGORY, { variables : {
		categoryId : categoryId
	}} ) : useQuery ( LIST_PHOTOS )

	if ( error ) {
		return <h2>Internal Server Error</h2>
	}

	return (
		<ul>
			{
				loading
				? <PhotoCard key='loading' />
				: data.photos.map(photo => <PhotoCard key={ photo.id } { ...photo } />)
			}
		</ul>
	)
}
