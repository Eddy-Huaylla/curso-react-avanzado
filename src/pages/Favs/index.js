import React from "react";
import { Layout } from "../../components/Layout";
import { ListOfFavorites } from "../../components/ListOfFavorites";

export default () => {
	return (
		<Layout title='Tus favoritos' subtitle='Aquí puedes encontrar tus favoritos'>
			<ListOfFavorites />
		</Layout>
	)
}
