import React from "react";
import { Button } from "./styles";

export const SubmitButton = ( { children, onClick = null, disabled = false }) => {
	return <Button type='submit' disabled = { disabled } onClick={ onClick }>{ children }</Button>
}
