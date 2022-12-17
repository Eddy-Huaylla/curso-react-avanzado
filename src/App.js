import React from 'react'
import { Logo } from './components/Logo'
import { GlobalStyle } from './styles/GlobalStyles'
import { BrowserRouter } from 'react-router-dom'

import { NavBar } from './components/NavBar'
import { Routes } from './Routes'
import { AlertActivate } from './container/AlertActivate'

export const App = () => {
	return (
		<BrowserRouter>
			<GlobalStyle />
			<Logo />
			<Routes />
			<NavBar />
			<AlertActivate />
		</BrowserRouter>
	)
}
