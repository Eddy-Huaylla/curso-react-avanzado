import React from "react"
import { useParams } from "react-router-dom"
import { Layout } from "../../components/Layout"
import { PhotoCardWithQuery } from "../../container/PhotoCardWithQuery"

export default () => {
	let params = useParams()
	return (
		<Layout title = "Detalle de mascota" subtitle="Detalles">
			<PhotoCardWithQuery id = { params.detailId } />
		</Layout>
	)
}
