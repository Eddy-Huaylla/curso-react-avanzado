import React, { useContext } from "react";
import { Alert } from "../components/Alert";
import { AlertContext } from "../context/AlertContext";

export const AlertActivate = () => {
	const { show, message }  = useContext( AlertContext )
	return (
		<>
		<div>
			{ show && <Alert message = { message } /> }
		</div>
		</>
	)
}
