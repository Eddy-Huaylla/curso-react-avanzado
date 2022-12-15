import React from 'react'
import { Logo } from './components/Logo'
import { PhotoCardWithQuery } from './container/PhotoCardWithQuery'
import { GlobalStyle } from './styles/GlobalStyles'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home'

export const App = () => {
	const urlParams = new window.URLSearchParams( window.location.search )
  	const detailId = urlParams.get( 'detail' )

	return (
		<div>
			<GlobalStyle />
			<a href='/'>
				<Logo />
			</a>

			{
        		detailId
				? <PhotoCardWithQuery id={detailId} />
				: <BrowserRouter>
					<Routes>
					<Route path='/' element={ <Home /> } />
					<Route path='/pet/:id' element={ <Home /> } />
					</Routes>
				</BrowserRouter>
			}

		</div>
	)
}
