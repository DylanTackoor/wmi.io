import { graphql } from 'gatsby'
import React, { FunctionComponent } from 'react'
import { Layout } from '../components/Layout'

// export interface IHomePageProps {
// 	data: {
// 		site: {
// 			siteMetadata: {
// 				title: string
// 				description: string
// 			}
// 		}
// 	}
// }

// <IHomePageProps>
const HomePage: FunctionComponent = props => {
	// const { title, description } = props.data.site.siteMetadata

	return (
		<Layout>
			<h1>Home</h1>
			{/* <h1>{title}</h1>
			<p>{description}</p> */}
		</Layout>
	)
}

export default HomePage

// export const query = graphql`
// 	query {
// 		site {
// 			siteMetadata {
// 				title
// 				description
// 			}
// 		}
// 	}
// `
