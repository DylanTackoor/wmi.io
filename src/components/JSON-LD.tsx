import { graphql, useStaticQuery } from 'gatsby'
import React, { FunctionComponent } from 'react'
import Helmet from 'react-helmet'
import { Organization } from 'schema-dts'

/** FIX: image URL */
export const WorldmediaLD: FunctionComponent = () => {
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

	const title: string = site.siteMetadata.title
	const description: string = site.siteMetadata.description

	const Worldmedia: Organization & { '@context': 'http://schema.org' } = {
		'@context': 'http://schema.org',
		'@type': 'Store',
		description,
		image: 'https://www.plantvine.com/plants/2017/06/plantvine-logo.png',
		name: title,
		openingHours: 'Mo-Fr 09:00-16:30',
		telephone: '888-361-9998',
	}

	return (
		<Helmet>
			<script type='application/ld+json'>{JSON.stringify(Worldmedia)}</script>
		</Helmet>
	)
}
