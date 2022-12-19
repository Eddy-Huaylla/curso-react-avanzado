import React from 'react'
import { ListOfCategories } from '../../components/ListOfCategories'
import { ListOfPhotoCards } from '../../components/ListOfPhotoCards'
import { useParams } from "react-router-dom"
import { Layout } from '../../components/Layout'

const HomePage  = () => {
	let params = useParams()

	return (
		<Layout title='Tu app de fotos de mascotas' subtitle='Con Petgram puedes encontrar fotos de animales domésticos muy bonitos'>
			<ListOfCategories />
			<ListOfPhotoCards categoryId = { params.id }/>
		</Layout>
	)
}

export const Home = React.memo( HomePage, ( prevProps, props ) => {
	return prevProps.categoryId === props.categoryId
})
