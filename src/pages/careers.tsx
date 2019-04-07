import React, { FunctionComponent } from 'react'
import { Layout } from '../components/Layout'
import { SEO } from '../components/SEO'

import data from '../cms/content/careers.json'

const CareersPage: FunctionComponent = () => (
	<Layout>
		<SEO title='Careers' />
		<h1>{data.title}</h1>
		<p>{data.intro}</p>

		{data.departments.map(department => (
			<div>
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

export default CareersPage
