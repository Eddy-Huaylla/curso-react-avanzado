import React, { Fragment, useEffect, useState } from 'react'
import Skeleton from 'react-loading-skeleton'
import { useCategories } from '../../hooks/useCategories'
import { Category } from '../Category'

import { List, Item } from './styles'

export const ListOfCategories = () => {
	const { categories, loading, error, msgError } = useCategories();
	const [ showFixed, setShowFixed ] = useState( false )

	useEffect( () => {
		const onScroll = e => {
			const newShowFixed = window.scrollY > 200
			showFixed !== newShowFixed && setShowFixed(newShowFixed)
		}

		document.addEventListener('scroll', onScroll)

		return () => document.removeEventListener('scroll', onScroll)
	}, [ showFixed ])

	const renderList = (fixed) => (
		<List className={fixed ? 'fixed' : ''}>
			{
				loading
				? <Item key='loading'><Skeleton count = { 3 } width = { 75 }/></Item>
				: categories.map(category =>
					<Item key={ category.id }>
						<Category {...category} path={ `/pet/${category.id}` } />
					</Item>
				)
			}
		</List>
	)

	return (
		<>
			{
				error
				? <div> { msgError.toString() }</div>
				: <Fragment>
					{ renderList() }
					{ showFixed && renderList(true) }
				</Fragment>
			}
		</>
	)
}
