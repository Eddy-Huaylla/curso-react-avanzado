import React from 'react'
import { Logo } from './components/Logo'
import { GlobalStyle } from './styles/GlobalStyles'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home'
import { Detail } from './pages/Detail'
import { NavBar } from './components/NavBar'

export const App = () => {
	return (
		<BrowserRouter>
			<GlobalStyle />
			<Logo />

			<Routes>
					<Route path='/' element={ <Home /> } />
					<Route path='/pet/:id' element={ <Home /> } />
					<Route path='/detail/:detailId' element={ <Detail /> } />
			</Routes>

			<NavBar />
		</BrowserRouter>
	)
}
