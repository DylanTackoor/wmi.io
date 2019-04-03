import { graphql } from 'gatsby'
import { IFaq } from 'plant-vine'
import React, { FunctionComponent } from 'react'
import { Layout } from '../components/Layout'
import { SEO } from '../components/SEO'

export interface IAnswersPage {
	data: {
		faqs: {
			edges: Array<{
				node: IFaq
			}>
		}
	}
}

const faqPage: FunctionComponent<IAnswersPage> = props => (
	<Layout>
		<SEO title='Answers to Your Questions' />
		<h1>Answers to Your Questions</h1>
		{props.data.faqs.edges.map(({ node }) => (
			<div key={node.frontmatter.order}>
				<h2>{node.frontmatter.title}</h2>
				<div dangerouslySetInnerHTML={{ __html: node.html }} />
			</div>
		))}
	</Layout>
)

export default faqPage

export const query = graphql`
	query {
		faqs: allMarkdownRemark(
			filter: { fileAbsolutePath: { regex: "/src/faqs/" } }
			sort: { fields: [frontmatter___order], order: ASC }
		) {
			edges {
				node {
					html
					frontmatter {
						title
						order
					}
				}
			}
		}
	}
`
