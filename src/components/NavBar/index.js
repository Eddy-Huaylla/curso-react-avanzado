import React from 'react'
import { NavLink, Nav } from './styles'
import { MdHome, MdFavoriteBorder, MdPersonOutline } from 'react-icons/md'

const SIZE = '32px'

export const NavBar = () => {
	return (
		<Nav>
			<NavLink to='/'><MdHome size={SIZE} /></NavLink>
			<NavLink to='/favs'><MdFavoriteBorder size={SIZE} /></NavLink>
			<NavLink to='/user'><MdPersonOutline size={SIZE} /></NavLink>
		</Nav>
	)
}
