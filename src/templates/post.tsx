import { graphql } from 'gatsby'
import React, { FunctionComponent } from 'react'
import { IPost } from 'wmi'
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
	query($slug: String!) {
		markdownRemark(frontmatter: { slug: { eq: $slug } }) {
			html
			frontmatter {
				date(formatString: "MMMM DD, YYYY")
				title
			}
		}
	}
`
