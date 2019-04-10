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

			<div>
				<h2>{agency.teamTitle}</h2>
				{agency.skills.map(skill => (
					<p key={skill}>{skill}</p>
				))}
			</div>

			<div>
				<h2>{agency.statsTitle}</h2>
				<p>{agency.statsSubtitle}</p>
				{agency.stats.map(stat => (
					<div key={stat.description}>
						<p>{stat.number}</p>
						<p>{stat.stat}</p>
						<p>{stat.description}</p>
					</div>
				))}
			</div>

			<div>
				<h2>Our Offices</h2>
				{agency.ourOffices.map(office => (
					<div key={office.city}>
						<img src={office.logo} />
						<p>{office.city}</p>
						<p>{office.title}</p>
					</div>
				))}

				<h2>Partner Offices</h2>
				{agency.partnerOffices.map(office => (
					<div key={office.city}>
						<img src={office.logo} />
						<p>{office.city}</p>
						<p>{office.title}</p>
					</div>
				))}
			</div>
		</Layout>
	)
}

export default AgencyPage
