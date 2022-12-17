import React, { useContext } from "react"
import { Routes as RoutesDom, Route, Navigate } from 'react-router-dom'

import { Home } from '../pages/Home'
import { Login } from '../pages/Login'
import { Detail } from '../pages/Detail'
import { User } from "../pages/User"
import { Favs } from "../pages/Favs"
import { NotFound } from "../pages/NotFound"

import AuthContext from "../context/AuthContext"

export const Routes = () => {
	const {  isAuth } = useContext( AuthContext );

	return (
		<>
			<RoutesDom>
				<Route index path = '/' element = { <Home /> } />
				<Route path = '/login' element = { <Login /> } />
				<Route path = '/pet/:id' element = { <Home /> } />
				<Route path = '/detail/:detailId' element = { <Detail /> } />

				<Route path='/user' element={ isAuth ? <User /> : <Navigate replace to='/login' />}/>
				<Route path='/favs' element={ isAuth ? <Favs /> : <Navigate replace to='/login' />}/>

				<Route path = '/*' element={ <NotFound /> } />
			</RoutesDom>

		</>
	)
}
