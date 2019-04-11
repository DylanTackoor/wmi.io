import React, { FunctionComponent } from 'react'
import { Layout } from '../components/Layout'
import { SEO } from '../components/SEO'

import { departments, intro, title } from '../cms/content/careers.json'

const CareersPage: FunctionComponent = () => (
	<Layout>
		<SEO title='Careers' />
		<h1>{title}</h1>
		<p>{intro}</p>

		{departments.map(department => (
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

export default CareersPage
