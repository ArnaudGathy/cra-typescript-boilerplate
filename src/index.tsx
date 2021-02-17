import React from 'react'
import ReactDOM from 'react-dom'
import { App } from './App'
import './config/i18n/i18n'
import './default.css'

ReactDOM.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
	document.getElementById('root')
)
