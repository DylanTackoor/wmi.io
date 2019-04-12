import styled from '@emotion/styled'
import { graphql, useStaticQuery } from 'gatsby'
import React, { FunctionComponent } from 'react'

// Elements
const NavLogo = styled.img``

const NavLinksContainer = styled.ul`
	list-style: none;
`

// Component
export const NavBar: FunctionComponent = () => {
	const { site } = useStaticQuery(
		graphql`
			query {
				site {
					siteMetadata {
						title
					}
				}
			}
		`
	)

	return (
		<nav>
			<h1>Nav</h1>
		</nav>
	)
}
