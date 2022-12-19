import React from "react"
import Skeleton from "react-loading-skeleton"
import { useFavorites } from "../../hooks/useFavorites"
import { Grid, Image, Link } from "./styles"

export const ListOfFavorites = () => {
	const { favorites, loadingFavorites, errorFavorites } = useFavorites()

	return (
		<Grid>
			{ errorFavorites && <h2> { errorFavorites?.message } </h2>}

			{
				loadingFavorites
				? <Skeleton />
				: favorites.map( fav => {
					return (
						<Link key = { fav.id} to = { `/detail/${ fav.id }` } >
							<Image src = { fav.src } />
						</Link>
					)
				})
			}
		</Grid>
	)
}
