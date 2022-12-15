import React from 'react'
import { useQuery } from '@apollo/client';
import { PhotoCard } from '../PhotoCard'
import listPhotos from '../../graphql/photo/queries/list-photos.gql'

export const ListOfPhotoCards = () => {
	const { loading, error, data } = useQuery( listPhotos );

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
