import styled from 'styled-components'
import { NavLink as LinkRouter } from 'react-router-dom'
import { fadeIn } from '../../styles/animation'

export const Nav = styled.nav`
  align-items: center;
  background: #fcfcfc;
  border-top: 1px solid #e0e0e0;
  bottom: -1px;
  display: flex;
  height: 50px;
  justify-content: space-around;
  left: 0;
  margin: 0 auto;
  max-width: 500px;
  position: sticky;
  right: 0;
  width: 100%;
  z-index: 1000;
`

export const NavLink = styled( LinkRouter )`
  align-items: center;
  color: #888;
  display: inline-flex;
  height: 100%;
  justify-content: center;
  text-decoration: none;
  width: 100%;
  overflow: hidden;
  position: relative;

	&[aria-current] {
		color: #000;

		&:after {
			${ fadeIn( { time: '0.8s' } ) }
			content: '·';
			position: absolute;
			bottom: 0;
			font-size: 34px;
			line-height: 20px;
		}
	}
`
