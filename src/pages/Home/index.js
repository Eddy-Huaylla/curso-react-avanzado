import React, { Fragment } from 'react';
import { ListOfCategories } from '../../components/ListOfCategories'
import { ListOfPhotoCards } from '../../components/ListOfPhotoCards';
import { useParams } from "react-router-dom";

export const Home = () => {
	let params = useParams();

	return (
		<Fragment>
			<ListOfCategories />
			<ListOfPhotoCards categoryId = { params.id }/>
		</Fragment>
	)
}
