import { graphql, useStaticQuery } from 'gatsby'
import React, { FunctionComponent } from 'react'
import Helmet from 'react-helmet'
import { Brand, Organization, PostalAddress } from 'schema-dts'

const graphImg = require('../images/opengraph.png')
const contactPageSlug = 'contact'

export const WorldmediaLD: FunctionComponent = () => {
	const { site, settingsJson } = useStaticQuery(
		graphql`
			query {
				site {
					siteMetadata {
						title
						description
						siteUrl
					}
				}
				settingsJson {
					email
					facebookURL
					instagramURL
					linkedinURL
					telephone
					twitterURL
					youtubeURL
				}
			}
		`
	)

	const {
		email,
		facebookURL,
		instagramURL,
		linkedinURL,
		telephone,
		twitterURL,
		youtubeURL,
	} = settingsJson
	const phoneNumber: string = site.siteMetadata.phoneNumber
	const title: string = site.siteMetadata.title
	const siteUrl: string = site.siteMetadata.siteUrl
	const description: string = site.siteMetadata.description
	const address: PostalAddress = {
		'@type': 'PostalAddress',
		addressCountry: 'USA',
		addressLocality: 'Miami',
		addressRegion: 'FL',
		postalCode: '33127',
		streetAddress: '3401 N Miami Ave #239',
	}

	const brands: Array<Brand & { '@context': 'https://schema.org' }> = [
		{
			'@context': 'https://schema.org',
			'@type': 'Brand',
			name: 'Alamo',
		},
		{
			'@context': 'https://schema.org',
			'@type': 'Brand',
			name: 'Latam',
		},
		{
			'@context': 'https://schema.org',
			'@type': 'Brand',
			name: 'Enterprise',
		},
		{
			'@context': 'https://schema.org',
			'@type': 'Brand',
			name: 'National',
		},
		{
			'@context': 'https://schema.org',
			'@type': 'Brand',
			name: 'Air Canada',
		},
		{
			'@context': 'https://schema.org',
			'@type': 'Brand',
			name: 'Resorts World Bimini',
		},
		{
			'@context': 'https://schema.org',
			'@type': 'Brand',
			name: 'Resorts Karisma Hotels & Resorts',
		},
		{
			'@context': 'https://schema.org',
			'@type': 'Brand',
			name: 'Toronto Escapes',
		},
		{
			'@context': 'https://schema.org',
			'@type': 'Brand',
			name: 'Norwegian Cruise Line',
		},
		{
			'@context': 'https://schema.org',
			'@type': 'Brand',
			name: 'MSC Cruises',
		},
		{
			'@context': 'https://schema.org',
			'@type': 'Brand',
			name: 'Club Premier',
		},
		{
			'@context': 'https://schema.org',
			'@type': 'Brand',
			name: 'South African Airways',
		},
		{
			'@context': 'https://schema.org',
			'@type': 'Brand',
			name: 'South Bahamas Paradise Cruise Line',
		},
		{
			'@context': 'https://schema.org',
			'@type': 'Brand',
			name: 'Cayman Islands Yellow Pages',
		},
		{
			'@context': 'https://schema.org',
			'@type': 'Brand',
			name: 'Woodspring Hotels',
		},
		{
			'@context': 'https://schema.org',
			'@type': 'Brand',
			name: 'Meliã Hotels & Resorts',
		},
		{
			'@context': 'https://schema.org',
			'@type': 'Brand',
			name: 'CopaAirlines',
		},
		{
			'@context': 'https://schema.org',
			'@type': 'Brand',
			name: 'Crystal Cruises',
		},
		{
			'@context': 'https://schema.org',
			'@type': 'Brand',
			name: 'AeroMexico',
		},
		{
			'@context': 'https://schema.org',
			'@type': 'Brand',
			name: 'Polynesian Cultural Center',
		},
		{
			'@context': 'https://schema.org',
			'@type': 'Brand',
			name: 'Children\'s Cancer Caring Center',
		},
		{
			'@context': 'https://schema.org',
			'@type': 'Brand',
			name: 'Girl Scouts of Hawaii',
		},
		{
			'@context': 'https://schema.org',
			'@type': 'Brand',
			name: 'SelectQuote',
		},
		{
			'@context': 'https://schema.org',
			'@type': 'Brand',
			name: 'MidiCi',
		},
		{
			'@context': 'https://schema.org',
			'@type': 'Brand',
			name: 'Alert Alarm',
		},
	]

	const Worldmedia: Organization & { '@context': 'https://schema.org' } = {
		'@context': 'https://schema.org',
		'@type': 'Organization',
		description,
		image: `${siteUrl}${graphImg}`,
		name: title,
		email,
		telephone,
		address,
		url: siteUrl,
		award: ['Gold Magellan x2'],
		contactPoint: {
			'@type': 'ContactPoint',
			contactType: 'sales',
			telephone: phoneNumber,
			url: `${siteUrl}/${contactPageSlug}/`,
		},
		sameAs: [facebookURL, twitterURL, instagramURL, linkedinURL, youtubeURL],
		brand: brands,
		// foundingDate: '',
		// foundingLocation: address,
	}

	return (
		<Helmet>
			<script type='application/ld+json'>{JSON.stringify(Worldmedia)}</script>
		</Helmet>
	)
}
