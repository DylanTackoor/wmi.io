import { graphql, Link } from 'gatsby'
import React, { FunctionComponent } from 'react'
import { IPost } from 'wmi'
import { Layout } from '../components/Layout'
import { SEO } from '../components/SEO'

export interface IBlogPage {
	data: {
		blogJson: {
			slug: string
			title: string
		}
		posts: {
			edges: Array<{
				node: IPost
			}>
		}
	}
}

const BlogPage: FunctionComponent<IBlogPage> = props => {
	const { blogJson, posts } = props.data

	return (
		<Layout>
			<SEO title={blogJson.title} />
			<h1>{blogJson.title}</h1>
			<ul>
				{posts.edges.map(({ node }) => (
					<li key={node.frontmatter.slug}>
						<p>{node.frontmatter.date}</p>
						<Link to={`/${blogJson.slug}/${node.frontmatter.slug}`}>
							{node.frontmatter.title}
						</Link>
					</li>
				))}
			</ul>
		</Layout>
	)
}

export default BlogPage

export const pageQuery = graphql`
	query {
		blogJson {
			slug
			title
		}
		posts: allMarkdownRemark(
			filter: { fileAbsolutePath: { regex: "/src/posts/" } }
			sort: { order: DESC, fields: [frontmatter___date] }
		) {
			edges {
				node {
					html
					frontmatter {
						date(formatString: "MMMM Do, YYYY")
						slug
						title
					}
				}
			}
		}
	}
`
