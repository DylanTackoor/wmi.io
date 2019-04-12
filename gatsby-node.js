/* eslint-disable no-console */

const path = require(`path`)

// HACK: query these w/GraphQL
const blogPage = require(`./src/cms/content/blog.json`)

exports.createPages = async ({ graphql, actions }) => {
	// Expose Gatsby APIs
	const { createPage } = actions

	// Query for data
	const result = await graphql(`
		{
			allMarkdownRemark(
				filter: { fileAbsolutePath: { regex: "/src/posts/" } }
			) {
				edges {
					node {
						fileAbsolutePath
						frontmatter {
							slug
						}
					}
				}
			}
		}
	`)

	// Check for query errors
	if (result.errors) {
		throw new Error(result.errors)
	}

	// Extract data from query results
	const { allMarkdownRemark } = result.data

	const postTemplate = path.resolve(`./src/templates/post.tsx`)
	allMarkdownRemark.edges.forEach(({ node }) => {
		if (node.fileAbsolutePath.includes(`/src/posts/`)) {
			createPage({
				path: `${blogPage.slug}/${node.frontmatter.slug}/`,
				context: { slug: node.frontmatter.slug },
				component: postTemplate,
			})
		}
	})
}
