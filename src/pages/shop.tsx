import { graphql, Link } from 'gatsby'
import { IProduct } from 'plant-vine'
import React, { FunctionComponent } from 'react'
import { Layout } from '../components/Layout'
import { SEO } from '../components/SEO'

export interface IShopPage {
	data: {
		allStripeProduct: {
			edges: Array<{
				node: IProduct
			}>
		}
	}
}

const ShopPage: FunctionComponent<IShopPage> = props => (
	<Layout>
		<SEO title='Shop' />
		<h1>Shop</h1>
		<ol>
			{props.data.allStripeProduct.edges.map(({ node }) => (
				<li>
					<Link
						to={`/product/${node.name
							.toLowerCase()
							.split(` `)
							.join(`-`)}`}
					>
						{node.name}
					</Link>
				</li>
			))}
		</ol>
	</Layout>
)

export default ShopPage

export const pageQuery = graphql`
	{
		allStripeProduct(filter: { active: { eq: true } }) {
			edges {
				node {
					id
					name
				}
			}
		}
	}
`
