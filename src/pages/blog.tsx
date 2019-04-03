import { graphql, Link } from 'gatsby'
import { IPost } from 'plant-vine'
import React, { FunctionComponent } from 'react'
import { Layout } from '../components/Layout'
import { SEO } from '../components/SEO'

export interface IBlogPage {
	data: {
		posts: {
			edges: Array<{
				node: IPost
			}>
		}
	}
}

const BlogPage: FunctionComponent<IBlogPage> = props => (
	<Layout>
		<SEO title='Blog' />
		<h1>Blog</h1>
		<ul>
			{props.data.posts.edges.map(({ node }) => (
				<li>
					<p>{node.frontmatter.date}</p>
					<Link to={node.frontmatter.path}>{node.frontmatter.title}</Link>
				</li>
			))}
		</ul>
	</Layout>
)

export default BlogPage

export const pageQuery = graphql`
	query {
		posts: allMarkdownRemark(
			filter: { fileAbsolutePath: { regex: "/src/posts/" } }
			sort: { order: DESC, fields: [frontmatter___date] }
		) {
			edges {
				node {
					html
					frontmatter {
						date(formatString: "MMMM Do, YYYY")
						path
						title
					}
				}
			}
		}
	}
`
