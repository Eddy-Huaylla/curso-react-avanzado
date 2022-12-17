import styled from 'styled-components'

export const Button = styled.button`
	display: flex;
	align-items: center;
	padding-top: 8px;

	&:disabled {
		pointer-events: none;
		opacity: 0.5;
	}

	& svg {
		margin-right: 4px;
	}
`
