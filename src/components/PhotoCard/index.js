import React, { Fragment, useContext, useEffect } from 'react'
import { ImgWrapper, Img, Article } from './styles'
import { useNearScreen } from '../../hooks/useNearScreen'
import { useMuationToogleLike } from '../../hooks/useMuationToogleLike'
import { FavButton } from '../FavButton'
import { Link } from 'react-router-dom'
import { AlertContext } from '../../context/AlertContext'

const DEFAULT_IMAGE = 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'

export const PhotoCard = ( { id, liked, likes = 0, src = DEFAULT_IMAGE } ) => {
	const [ show, element ] = useNearScreen()
	const { mutation, mutationLoading, mutationError } = useMuationToogleLike()

	const { activate, desactivate } = useContext( AlertContext )

	const handleFavClick = () => {
		mutation( {
			variables: {
				input: { id }
			}
		} )
	}

	useEffect( () => {
		if ( mutationError ) {
			activate( mutationError?.message )
			window.setTimeout( () => desactivate(), 5000 )
		}
	}, [ mutationError ] )

	return (
		<Article ref = {element}>
			{
				show && <Fragment>
					<Link to = { `/detail/${id}` }>
						<ImgWrapper>
						<Img src = {src} />
						</ImgWrapper>
					</Link>

					<FavButton
						liked   = { liked }
						likes   = { likes }
						onClick = { handleFavClick }
						loading = { mutationLoading }
					/>

				</Fragment>
			}

		</Article>
	)
}
