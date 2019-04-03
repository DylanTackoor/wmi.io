// tslint:disable: object-literal-sort-keys

import { Link } from 'gatsby'
import React, { FunctionComponent } from 'react'

const facebookLogo: string = require('../images/footer/facebook.svg')
const pinterestLogo: string = require('../images/footer/pinterest.svg')

export const Footer: FunctionComponent = () => {
	const menus = [
		{
			title: 'PLANTVINE',
			links: [
				{ title: 'About Us', path: '/about-us' },
				{ title: 'Shop Plants', path: '/shop' },
				{ title: 'Blog', path: '/blog' },
				{ title: 'Contact Us', path: '/contact-us' },
				{ title: 'FAQ', path: '/answers-to-your-questions' },
			],
		},
		{
			title: 'ORDERS',
			links: [
				{ title: '30 Day Guarantee', path: '/30-day-guarantee' },
				{ title: 'Order Tracking', path: '/order-tracking' },
				{ title: 'My Account', path: '/my-account' },
				{ title: 'Shipping Plants', path: '/shipping-plants' },
				{ title: 'Return Policy', path: '/return-policy' },
			],
		},
		{
			title: 'THE FINE PRINT',
			links: [
				{ title: 'Privacy Policy', path: '/privacy-policy' },
				{ title: 'Terms of Service', path: '/terms-of-service' },
			],
		},
	]

	// Load
	return (
		<footer>
			<ul>
				{menus.map(menu => (
					<li key={menu.title}>
						<p>{menu.title}</p>
						<ul>
							{menu.links.map(link => (
								<li key={link.title}>
									<Link to={link.path}>{link.title}</Link>
								</li>
							))}
						</ul>
					</li>
				))}
			</ul>

			<div>
				<a
					href='https://www.facebook.com/PlantVineCo'
					target='_blank'
					rel='noopener'
				>
					<img src={facebookLogo} alt='Facebook' />
				</a>
				<a
					href='https://www.pinterest.com/plantvineco/'
					target='_blank'
					rel='noopener'
				>
					<img src={pinterestLogo} alt='Pinterest' />
				</a>
			</div>

			<p>&copy; 2018 plantVine</p>
		</footer>
	)
}
