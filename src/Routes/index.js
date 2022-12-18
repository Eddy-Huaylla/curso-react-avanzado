import React, { Suspense, useContext } from "react"
import { Routes as RoutesDom, Route, Navigate } from 'react-router-dom'

import Spinner from "../components/Spinner";

import { Home } from '../pages/Home'

import AuthContext from "../context/AuthContext"

const Login = React.lazy(() => import('../pages/Login'));
const Detail = React.lazy(() => import('../pages/Detail'));
const User = React.lazy(() => import('../pages/User'));
const Favs = React.lazy(() => import('../pages/Favs'));
const NotFound = React.lazy(() => import('../pages/NotFound'));

export const Routes = () => {
	const {  isAuth } = useContext( AuthContext );

	return (
		<Suspense fallback = { <Spinner /> }>
			<RoutesDom>
				<Route index path = '/' element = { <Home /> } />
				<Route path = '/login' element = { <Login /> } />
				<Route path = '/pet/:id' element = { <Home /> } />
				<Route path = '/detail/:detailId' element = { <Detail /> } />

				<Route path='/user' element={ isAuth ? <User /> : <Navigate replace to='/login' />}/>
				<Route path='/favs' element={ isAuth ? <Favs /> : <Navigate replace to='/login' />}/>

				<Route path = '/*' element={ <NotFound /> } />
			</RoutesDom>

		</Suspense>
	)
}
