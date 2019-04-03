import Dinero from 'dinero.js'
import { graphql } from 'gatsby'
import { IProduct, ISKU } from 'plant-vine'
import React, { FunctionComponent } from 'react'
import { Layout } from '../components/Layout'
import { SEO } from '../components/SEO'

export interface IProductTemplateQuery {
	data: {
		stripeProduct: IProduct
		allStripeSku: {
			edges: Array<{
				node: ISKU
			}>
		}
	}
}

const ProductTemplate: FunctionComponent<IProductTemplateQuery> = props => {
	const { stripeProduct, allStripeSku } = props.data

	return (
		<Layout>
			<SEO title={stripeProduct.name} />

			<div>
				<h1>{stripeProduct.name}</h1>

				<p>Zones:</p>
				<ul>
					{stripeProduct.metadata.Zones.split(', ').map(zone => (
						<li key={zone}>{zone}</li>
					))}
				</ul>

				<p>Categories:</p>
				<ul>
					{stripeProduct.metadata.Categories.split(', ').map(category => (
						<li key={category}>{category}</li>
					))}
				</ul>

				<p>Sizes:</p>
				{allStripeSku.edges.map(({ node }) => {
					const variant = node.attributes.pot
					const price = Dinero({
						amount: node.price,
						currency: 'USD',
					}).toFormat('$0,0.00')

					return (
						<p key={node.id}>
							{variant}: {price}
						</p>
					)
				})}
			</div>
		</Layout>
	)
}

export default ProductTemplate

export const pageQuery = graphql`
	query($productID: String!) {
		stripeProduct(id: { eq: $productID }) {
			id
			name
			metadata {
				Categories
				Tags
				Zones
			}
		}
		allStripeSku(filter: { product: { id: { eq: $productID } } }) {
			edges {
				node {
					id
					price
					attributes {
						pot
					}
				}
			}
		}
	}
`
