import { graphql } from 'gatsby'
import React, { FunctionComponent } from 'react'
import { WorldmediaLD } from '../components/JSON-LD'
import { Layout } from '../components/Layout'
import { SEO } from '../components/SEO'

export interface IndexPageProps {
	data: {
		site: {
			siteMetadata: {
				title: string
				description: string
			}
		}
	}
}

const IndexPage: FunctionComponent<IndexPageProps> = props => {
	const { siteMetadata } = props.data.site
	const { title, description } = siteMetadata

	return (
		<Layout>
			<SEO />
			<WorldmediaLD />
			<h1>{title}</h1>
			<p>{description}</p>
		</Layout>
	)
}

export default IndexPage

export const query = graphql`
	query {
		site {
			siteMetadata {
				title
				description
			}
		}
	}
`
