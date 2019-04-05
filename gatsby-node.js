/* eslint-disable no-console */

const path = require(`path`)

exports.createPages = async ({ graphql, actions }) => {
	// Expose Gatsby APIs
	const { createPage } = actions

	// Query for data
	const result = await graphql(`
		{
			site {
				siteMetadata {
					blogPathPath
				}
			}
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
	const { site, allMarkdownRemark } = result.data
	const { blogPathPath } = site.siteMetadata

	const postTemplate = path.resolve(`./src/templates/post.tsx`)
	allMarkdownRemark.edges.forEach(({ node }) => {
		if (node.fileAbsolutePath.includes(`/src/posts/`)) {
			createPage({
				path: `${blogPathPath}${node.frontmatter.slug}`,
				context: { slug: node.frontmatter.slug },
				component: postTemplate,
			})
		}
	})
}
