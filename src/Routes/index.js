import React from "react"
import { Routes as RoutesDom, Route } from 'react-router-dom'

import { Home } from '../pages/Home'
import { Detail } from '../pages/Detail'
import { PrivateRoute } from "./PrivateRoute"

const isAuth = false

export const Routes = () => {
	return (
		<>
			<RoutesDom>
				<Route path = '/' element                 = { <Home /> } />
				<Route path = '/pet/:id' element          = { <Home /> } />
				<Route path = '/detail/:detailId' element = { <Detail /> } />
			</RoutesDom>

			<PrivateRoute isAuth = { isAuth }/>
		</>
	)
}
