import { graphql, useStaticQuery } from 'gatsby'
import React, { FunctionComponent } from 'react'
import { IAgencyPage } from 'wmi'
import { WorldmediaLD } from '../components/JSON-LD'
import { Layout } from '../components/Layout'
import { SEO } from '../components/SEO'

const AgencyPage: FunctionComponent = () => {
	const { agencyJson }: { agencyJson: IAgencyPage } = useStaticQuery(
		graphql`
			query {
				agencyJson {
					title
					backgroundVideo

					introTitle
					introText
					introBackgroundImage

					teamTitle
					skills

					statsTitle
					statsSubtitle
					stats {
						number
						stat
						description
					}

					ourOffices {
						city
						title
						logo
					}
					partnerOffices {
						city
						title
						logo
					}
				}
			}
		`
	)

	return (
		<Layout>
			<SEO />
			<WorldmediaLD />

			<header>
				<h1>{agencyJson.title}</h1>
			</header>

			<div>
				<p>{agencyJson.introText}</p>
				<h2>{agencyJson.introTitle}</h2>
			</div>

			<div>
				<h2>{agencyJson.teamTitle}</h2>
				{agencyJson.skills.map(skill => (
					<p key={skill}>{skill}</p>
				))}
			</div>

			<div>
				<h2>{agencyJson.statsTitle}</h2>
				<p>{agencyJson.statsSubtitle}</p>
				{agencyJson.stats.map(stat => (
					<div key={stat.description}>
						<p>{stat.number}</p>
						<p>{stat.stat}</p>
						<p>{stat.description}</p>
					</div>
				))}
			</div>

			<div>
				<h2>Our Offices</h2>
				{agencyJson.ourOffices.map(office => (
					<div key={office.city}>
						<img src={office.logo} />
						<p>{office.city}</p>
						<p>{office.title}</p>
					</div>
				))}

				<h2>Partner Offices</h2>
				{agencyJson.partnerOffices.map(office => (
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
