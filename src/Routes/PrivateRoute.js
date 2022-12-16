import React, { useContext } from 'react'
import { Favs } from '../pages/Favs'
import { User } from '../pages/User'
import { Login } from '../pages/Login'
import { Route, Routes } from 'react-router-dom'
import AuthContext from '../context/AuthContext'

export const PrivateRoute = () => {
	const {  isAuth } = useContext( AuthContext );

	return (
		<Routes>
			{
				isAuth ? (
				<>
					<Route path = '/favs' element = { <Favs /> } />
					<Route path = '/user' element = { <User /> } />
				</>
				) : (
				<>
					<Route path = '/favs' element = { <Login /> } />
					<Route path = '/user' element = { <Login /> } />
				</>
				)
			}
		</Routes>
	)
}
