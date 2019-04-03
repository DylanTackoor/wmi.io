import { css, Global } from '@emotion/core'
import emotionNormalize from 'emotion-normalize'
import React, { FunctionComponent } from 'react'
import Helmet from 'react-helmet'
import { Footer } from './Footer'
import { NavBar } from './NavBar'

export const Layout: FunctionComponent = props => (
	<div>
		<Helmet
			meta={[
				{
					content: 'yes',
					name: 'apple-mobile-web-app-capable',
				},
				{
					content: 'black-translucent',
					name: 'apple-mobile-web-app-status-bar-style',
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

				.wf-active p,
				.wf-active h1,
				.wf-active h2,
				.wf-active h3,
				.wf-active h4,
				.wf-active h5,
				.wf-active h6 {
					font-family: 'Dosis', sans-serif;
				}
			`}
		/>

		<NavBar />

		{props.children}

		<Footer />
	</div>
)
