import React from "react";
import { Button } from "./styles";
import PropTypes from 'prop-types'

export const SubmitButton = ( { children, onClick = null, disabled = false }) => {
	return <Button type='submit' disabled = { disabled } onClick={ onClick }>{ children }</Button>
}

SubmitButton.propTypes = {
	disabled: PropTypes.bool,
	onClick: PropTypes.func,
	children: PropTypes.node.isRequired
}
