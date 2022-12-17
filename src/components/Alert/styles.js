import styled from 'styled-components'

export const Div = styled.div`
	display: flex;
	justify-content: space-around;
	left: 0;
	margin: 0 auto;
	max-width: 500px;
	position: fixed;
	right: 0;
	width: calc( 100% - 1rem );
	z-index: 1001;
	align-items: center;
	background: ${ ( props ) => props.color };
	border-top: 1px solid #e0e0e0;
	bottom: 3rem;
	border-radius: 2rem;
	padding: 0.5rem;
`
