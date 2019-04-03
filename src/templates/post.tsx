import { graphql } from 'gatsby'
import { IPost } from 'plant-vine'
import React, { FunctionComponent } from 'react'
import { Layout } from '../components/Layout'
import { SEO } from '../components/SEO'

export interface IPostTemplateQuery {
	data: {
		markdownRemark: IPost
	}
}

const PostTemplate: FunctionComponent<IPostTemplateQuery> = props => {
	const { frontmatter, html } = props.data.markdownRemark

	return (
		<Layout>
			<SEO title={frontmatter.title} />

			<article className='blog-post-container'>
				<h1>{frontmatter.title}</h1>
				<h2>{frontmatter.date}</h2>
				<div dangerouslySetInnerHTML={{ __html: html }} />
			</article>
		</Layout>
	)
}

export default PostTemplate

export const pageQuery = graphql`
	query($path: String!) {
		markdownRemark(frontmatter: { path: { eq: $path } }) {
			html
			frontmatter {
				date(formatString: "MMMM DD, YYYY")
				path
				title
			}
		}
	}
`
