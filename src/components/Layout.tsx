import { css, Global } from '@emotion/core'
import emotionNormalize from 'emotion-normalize'
import { graphql, useStaticQuery } from 'gatsby'
import React, { FunctionComponent } from 'react'
import Helmet from 'react-helmet'
import { Footer } from './Footer'
import { NavBar } from './NavBar'

export const Layout: FunctionComponent = props => {
	const { site } = useStaticQuery(
		graphql`
			query {
				site {
					siteMetadata {
						title
						description
						siteUrl
					}
				}
			}
		`
	)

	return (
		<div>
			<Helmet
				htmlAttributes={{ lang: 'en' }}
				title={site.siteMetadata.title}
				meta={[
					{
						content: site.siteMetadata.description,
						name: 'description',
					},
				]}
			>
				<link
					rel='preconnect'
					href='https://fonts.gstatic.com/'
					crossOrigin={'true'}
				/>
				<link
					href='splashscreens/iphone5_splash.png'
					media='(device-width: 320px) and (device-height: 568px) and (-webkit-device-pixel-ratio: 2)'
					rel='apple-touch-startup-image'
				/>
				<link
					href='splashscreens/iphone6_splash.png'
					media='(device-width: 375px) and (device-height: 667px) and (-webkit-device-pixel-ratio: 2)'
					rel='apple-touch-startup-image'
				/>
				<link
					href='splashscreens/iphoneplus_splash.png'
					media='(device-width: 621px) and (device-height: 1104px) and (-webkit-device-pixel-ratio: 3)'
					rel='apple-touch-startup-image'
				/>
				<link
					href='splashscreens/iphonex_splash.png'
					media='(device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3)'
					rel='apple-touch-startup-image'
				/>
				<link
					href='splashscreens/iphonexr_splash.png'
					media='(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 2)'
					rel='apple-touch-startup-image'
				/>
				<link
					href='splashscreens/iphonexsmax_splash.png'
					media='(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 3)'
					rel='apple-touch-startup-image'
				/>
				<link
					href='splashscreens/ipad_splash.png'
					media='(device-width: 768px) and (device-height: 1024px) and (-webkit-device-pixel-ratio: 2)'
					rel='apple-touch-startup-image'
				/>
				<link
					href='splashscreens/ipadpro1_splash.png'
					media='(device-width: 834px) and (device-height: 1112px) and (-webkit-device-pixel-ratio: 2)'
					rel='apple-touch-startup-image'
				/>
				<link
					href='splashscreens/ipadpro3_splash.png'
					media='(device-width: 834px) and (device-height: 1194px) and (-webkit-device-pixel-ratio: 2)'
					rel='apple-touch-startup-image'
				/>
				<link
					href='splashscreens/ipadpro2_splash.png'
					media='(device-width: 1024px) and (device-height: 1366px) and (-webkit-device-pixel-ratio: 2)'
					rel='apple-touch-startup-image'
				/>
			</Helmet>

			<Global
				styles={css`
					${emotionNormalize}

					div,
				p {
						font-family: 'Roboto Slab', sans-serif;
					}

					h1,
					h2,
					h3,
					h4,
					h5,
					h6 {
						font-family: 'Montserrat', sans-serif;
					}
				`}
			/>

			<NavBar />

			{props.children}

			<Footer />
		</div>
	)
}
