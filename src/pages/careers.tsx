import { graphql, useStaticQuery } from 'gatsby'
import React, { FunctionComponent } from 'react'
import { Layout } from '../components/Layout'
import { SEO } from '../components/SEO'

interface ICareersPage {
	title: string
	intro: string
	departments: Array<{
		name: string
		careers: Array<{
			title: string
			opened: string
		}>
	}>
}

const CareersPage: FunctionComponent = () => {
	const { careersJson }: { careersJson: ICareersPage } = useStaticQuery(
		graphql`
			query {
				careersJson {
					title
					intro
					departments {
						name
						careers {
							title
							opened
						}
					}
				}
			}
		`
	)

	return (
		<Layout>
			<SEO title='Careers' />
			<h1>{careersJson.title}</h1>
			<p>{careersJson.intro}</p>

			{careersJson.departments.map(department => (
				<div key={department.name}>
					<h2>{department.name}</h2>
					<ul>
						{department.careers.map(career => (
							<li key={career.title}>
								{career.title} | {career.opened}
							</li>
						))}
					</ul>
				</div>
			))}
		</Layout>
	)
}

export default CareersPage
