/* eslint-disable no-console */

const path = require(`path`)

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
							path
						}
					}
				}
			}
			allStripeProduct(filter: { active: { eq: true } }) {
				edges {
					node {
						id
						name
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
	const { allMarkdownRemark, allStripeProduct } = result.data

	const postTemplate = path.resolve(`./src/templates/post.tsx`)
	allMarkdownRemark.edges.forEach(({ node }) => {
		if (node.fileAbsolutePath.includes(`/src/posts/`)) {
			createPage({
				path: node.frontmatter.path,
				component: postTemplate,
			})
		}
	})

	const productTemplate = path.resolve(`./src/templates/product.tsx`)
	allStripeProduct.edges.forEach(({ node }) => {
		const newPath = `/product/${node.name
			.toLowerCase()
			.split(` `)
			.join(`-`)}`

		createPage({
			component: productTemplate,
			context: { productID: node.id },
			path: newPath,
		})
	})
}
