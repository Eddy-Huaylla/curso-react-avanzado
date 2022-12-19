import React from 'react'
import { LoadingIcon, SpinnerBox, Text } from './styles'

export default () => {
	return (
	<SpinnerBox className="spinner-box">
		<LoadingIcon className="loading-icon" />
		<Text>Loading...</Text>
	</SpinnerBox>
	)
}
