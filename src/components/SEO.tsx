import { graphql, useStaticQuery } from 'gatsby'
import React, { FunctionComponent } from 'react'
import Helmet from 'react-helmet'

interface ISeoConfig {
	description?: string
	lang?: string
	meta?: any
	keywords?: string[]
	title?: string
}

export const SEO: FunctionComponent<ISeoConfig> = props => {
	// Extract
	const { site } = useStaticQuery(
		graphql`
			query {
				site {
					siteMetadata {
						title
						description
					}
				}
			}
		`
	)

	// Transform
	const siteMetadata: ISeoConfig = site.siteMetadata
	const title = props.title
		? `${props.title} | ${siteMetadata.title}`
		: siteMetadata.title
	const description = props.description
		? props.description
		: siteMetadata.description

	// Load
	return (
		<Helmet
			htmlAttributes={{ lang: 'en' || props.lang }}
			title={title}
			meta={[
				{
					content: description,
					name: `description`,
				},
				{
					content: '7486544e13fc40edbfaa2db898186400',
					name: 'p:domain_verify',
				},
			]}
		>
			<link rel='profile' href='https://gmpg.org/xfn/11' />
			<link rel='pingback' href='https://www.plantvine.com/xmlrpc.php' />
		</Helmet>
	)
}
