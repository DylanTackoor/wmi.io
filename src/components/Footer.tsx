import styled from '@emotion/styled'
import { graphql, useStaticQuery } from 'gatsby'
import React, { FunctionComponent } from 'react'

// Elements
const FooterContainer = styled('footer')`
	background-color: #23282d;
	color: #a8a6aa;
`

export const Footer: FunctionComponent = () => {
	const { settingsJson } = useStaticQuery(
		graphql`
			query {
				settingsJson {
					phone
				}
			}
		`
	)

	return (
		<FooterContainer>
			<p>&copy; {new Date().getFullYear()} Worldmedia Interactive.</p>
			<p>
				<a href='https://worldmedia.net'>WORLDMEDIA.NET</a> |{' '}
				{settingsJson.phone}
			</p>
		</FooterContainer>
	)
}
