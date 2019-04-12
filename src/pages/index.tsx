import { graphql } from 'gatsby'
import React, { FunctionComponent } from 'react'
import { WorldmediaLD } from '../components/JSON-LD'
import { Layout } from '../components/Layout'
import { SEO } from '../components/SEO'

export interface IHomePageProps {
	data: {
		site: {
			siteMetadata: {
				title: string
				description: string
			}
		}
	}
}

const HomePage: FunctionComponent<IHomePageProps> = props => {
	const { title, description } = props.data.site.siteMetadata

	return (
		<Layout>
			<SEO />
			<WorldmediaLD />
			<h1>{title}</h1>
			<p>{description}</p>
		</Layout>
	)
}

export default HomePage

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
