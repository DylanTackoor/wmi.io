// import { graphql } from 'gatsby'
import React, { FunctionComponent } from 'react'
import { WorldmediaLD } from '../components/JSON-LD'
import { Layout } from '../components/Layout'
import { SEO } from '../components/SEO'

import agency from '../cms/content/agency.json'

const AgencyPage: FunctionComponent = () => {
	return (
		<Layout>
			<SEO />
			<WorldmediaLD />

			<header>
				<h1>{agency.title}</h1>
			</header>

			<div>
				<p>{agency.introText}</p>
				<h2>{agency.introTitle}</h2>
			</div>

			{/* <div>
				<h2>{agency.skillsTitle}</h2>
				<ul>
					{agency.skills.map(skill => (
						<li key={skill}>{skill}</li>
					))}
				</ul>
			</div> */}

			<div>
				<h2>{agency.statsTitle}</h2>
				<p>{agency.statsSubtitle}</p>

				<div>
					<p>19+</p>
					<p>YEARS</p>
					<p>Of Innovative Solutions</p>
				</div>
			</div>
		</Layout>
	)
}

export default AgencyPage
