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
					content: 'TODO:',
					name: 'p:domain_verify',
				},
			]}
		/>
	)
}
