import { graphql, Link, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import React, { FunctionComponent } from 'react'

export const NavBar: FunctionComponent = () => {
	const { navLogo } = useStaticQuery(graphql`
		query {
			navLogo: file(relativePath: { eq: "navLogo.png" }) {
				childImageSharp {
					fixed(height: 94) {
						...GatsbyImageSharpFixed_withWebp
					}
				}
			}
		}
	`)

	const leftLinks = [
		{
			path: '/about-us',
			title: 'About',
		},
		{
			dropdown: [
				{
					path: '/shop',
					title: 'House Plants / Indoor / Interior',
				},
				{
					path: '/shop',
					title: 'Edible Fruits and Nuts',
				},
				{
					path: '/shop',
					title: 'Ferns',
				},
				{
					path: '/shop',
					title: 'Grasses and Bamboo',
				},
				{
					path: '/shop',
					title: 'Groundcovers',
				},
				{
					path: '/shop',
					title: 'Palms',
				},
				{
					path: '/shop',
					title: 'Shrubs',
				},
				{
					path: '/shop',
					title: 'Tropicals',
				},
				{
					path: '/shop',
					title: 'Vines and Climbers',
				},
				{
					path: '/shop',
					title: 'View All Categories',
				},
			],
			path: '/shop',
			title: 'Shop',
		},
		{
			path: '/blog',
			title: 'Blog',
		},
	]

	return (
		<nav>
			{/* <div class='top' /> */}

			{/* Bottom */}
			<div>
				<ul>
					{leftLinks.map(link => (
						<li key={link.title} style={{ display: 'inline-block' }}>
							<Link to={link.path}>{link.title}</Link>
						</li>
					))}
				</ul>
				<Link to='/'>
					<Img fixed={navLogo.childImageSharp.fixed} />
				</Link>
			</div>
		</nav>
	)
}
