import { graphql, useStaticQuery } from 'gatsby'
import React, { FunctionComponent } from 'react'
import Helmet from 'react-helmet'

const graphImgRelPath = require('../images/opengraph.png')

interface ISeoConfig {
	description?: string
	lang?: string
	meta?: any
	keywords?: string[]
	title?: string
	siteUrl?: string
}

export const SEO: FunctionComponent<ISeoConfig> = props => {
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

	const siteMetadata: ISeoConfig = site.siteMetadata
	const graphImgURL = `${siteMetadata.siteUrl}${graphImgRelPath}`
	const title = props.title
		? `${props.title} | ${siteMetadata.title}`
		: siteMetadata.title
	const description = props.description
		? props.description
		: siteMetadata.description

	return (
		<Helmet htmlAttributes={{ lang: 'en' || props.lang }} title={title}>
			<meta name='description' content={description} />

			<meta property='og:locale' content='en_US' />
			<meta property='og:type' content='website' />
			<meta property='og:title' content={title} />
			<meta property='og:description' content={description} />
			<meta property='og:url' content={siteMetadata.siteUrl} />
			<meta property='og:site_name' content={title} />
			<meta property='og:image' content={graphImgURL} />
			<meta property='og:image:secure_url' content={graphImgURL} />
			<meta property='og:image:alt' content='Worldmedia Interactive Logo' />
			<meta property='og:image:width' content='1200' />
			<meta property='og:image:height' content='630' />

			{/* FIX: Facebook ownership tag */}
			{/* <meta property='fb:app_id' content='106117212800631' /> */}

			{/* TODO: figure out which tags can be replaced with ^ og:tags */}
			<meta name='twitter:card' content='summary_large_image' />
			<meta name='twitter:url' content={siteMetadata.siteUrl} />
			<meta name='twitter:title' content={title} />
			<meta name='twitter:description' content={description} />
			<meta name='twitter:site' content='@worldmediamiami' />
			<meta name='twitter:creator' content='@dylantackoor' />
			<meta name='twitter:image:src' content={graphImgURL} />
			<meta name='twitter:image:alt' content={title} />
			<meta name='twitter:image:width' content='1200' />
			<meta name='twitter:image:height' content='630' />
		</Helmet>
	)
}
