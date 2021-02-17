import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { Home } from '../screens/Home'

export const Routes = () => (
	<Switch>
		<Route path="/" component={Home} />
	</Switch>
)
