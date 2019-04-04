import { graphql, useStaticQuery } from 'gatsby'
import React, { FunctionComponent } from 'react'
import Helmet from 'react-helmet'
import { Organization } from 'schema-dts'

const graphImg = require('../images/opengraph.png')

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
		image: graphImg,
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
