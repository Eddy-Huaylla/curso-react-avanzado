import React from "react";
import { Div } from "./styles";

const TYPED_COLOR = {
	default : '#999999',
	alert : '#03a9f4',
	succes : '#4caf50',
	warning : '#ffeb3b',
	danger : '#bd0000',
}

export const Alert = ( { type = '', message }) => {
	const color = TYPED_COLOR[ type ] ? TYPED_COLOR[ type ] : TYPED_COLOR.default;

	return <Div color = { color } >
		{ message }
	</Div>
}
