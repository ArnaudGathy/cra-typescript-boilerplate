import React from 'react'
import styled from 'styled-components'
import { useTranslation } from 'react-i18next'

const Container = styled.div`
	background-color: #b4d455;
`

export const Home = () => {
	const { t } = useTranslation('home')
	return (
		<Container>
			<div>Home Page</div>
			<div>{t('value')}</div>
		</Container>
	)
}
