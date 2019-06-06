import styled from '@emotion/styled'
import { graphql, useStaticQuery } from 'gatsby'
import React, { FunctionComponent } from 'react'
import { IAgencyPage } from 'wmi'
import { WorldmediaLD } from '../components/JSON-LD'
import { Layout } from '../components/Layout'
import { SEO } from '../components/SEO'

const VideoEle = styled.iframe`
	width: 100%;
	height: 75vh;
	pointer-events: none;
`

const AgencyPage: FunctionComponent = () => {
	const vid =
		'https://www.youtube-nocookie.com/embed/7CJcqPJiT1Q?version=3&autoplay=1&controls=0&showinfo=0&loop=1​x'
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

			<VideoEle src={vid} />

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
						<img src={office.logo} alt={office.city} />
						<p>{office.city}</p>
						<p>{office.title}</p>
					</div>
				))}

				<h2>Partner Offices</h2>
				{agencyJson.partnerOffices.map(office => (
					<div key={office.city}>
						<img src={office.logo} alt={office.city} />
						<p>{office.city}</p>
						<p>{office.title}</p>
					</div>
				))}
			</div>
		</Layout>
	)
}

export default AgencyPage
