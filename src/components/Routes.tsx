import React from 'react'
import { Routes as Switch, Route } from 'react-router-dom'
import { Home } from '../screens/Home'

export const Routes = () => (
	<Switch>
		<Route path="/" Component={Home} />
	</Switch>
)
