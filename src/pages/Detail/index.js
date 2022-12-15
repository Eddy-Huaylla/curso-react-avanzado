import React from "react";
import { useParams } from "react-router-dom";
import { PhotoCardWithQuery } from "../../container/PhotoCardWithQuery";

export const Detail = () => {
	let params = useParams();
	return <PhotoCardWithQuery id = { params.detailId } />
}
