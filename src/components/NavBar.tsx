import styled from '@emotion/styled'
import { graphql, Link, useStaticQuery } from 'gatsby'
import React, { FunctionComponent } from 'react'

// Assets
const navLogo = require('../images/navlogo.svg')

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

	const rightLinks = [
		{
			path: '/work',
			title: 'Work',
			dropdown: [
				{
					path: '/work/resorts-world-bimini/',
					title: 'Resorts World Bimini',
				},
			],
		},
		{
			path: '/services',
			title: 'Services',
		},
		{
			path: '/about',
			title: 'About',
		},
		{
			path: '/careers',
			title: 'Careers',
		},
		{
			path: '/contact',
			title: 'Contact',
		},
		{
			path: '/blog',
			title: 'Blog',
		},
	]

	return (
		<nav>
			<Link to='/'>
				{/* TODO: pull alt from config */}
				<NavLogo src={navLogo} alt={site.siteMetadata.title} />
			</Link>
			<ul>
				{rightLinks.map(link => (
					<li key={link.title} style={{ display: 'inline-block' }}>
						<Link to={link.path}>{link.title}</Link>
					</li>
				))}
			</ul>
		</nav>
	)
}
