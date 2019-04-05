import { graphql, useStaticQuery } from 'gatsby'
import React, { FunctionComponent } from 'react'
import Helmet from 'react-helmet'
import { Organization, PostalAddress } from 'schema-dts'

const graphImg = require('../images/opengraph.png')

export const WorldmediaLD: FunctionComponent = () => {
	const { site } = useStaticQuery(
		graphql`
			query {
				site {
					siteMetadata {
						title
						description
						siteUrl
						phoneNumber
					}
				}
			}
		`
	)

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

	// TODO: swap from Organization to Brand
	const brands: Array<Organization & { '@context': 'https://schema.org' }> = [
		{
			'@context': 'https://schema.org',
			'@type': 'Organization',
			name: 'Alamo',
		},
		{
			'@context': 'https://schema.org',
			'@type': 'Organization',
			name: 'Latam',
		},
		{
			'@context': 'https://schema.org',
			'@type': 'Organization',
			name: 'Enterprise',
		},
		{
			'@context': 'https://schema.org',
			'@type': 'Organization',
			name: 'National',
		},
		{
			'@context': 'https://schema.org',
			'@type': 'Organization',
			name: 'Air Canada',
		},
		{
			'@context': 'https://schema.org',
			'@type': 'Organization',
			name: 'Resorts World Bimini',
		},
		{
			'@context': 'https://schema.org',
			'@type': 'Organization',
			name: 'Resorts Karisma Hotels & Resorts',
		},
		{
			'@context': 'https://schema.org',
			'@type': 'Organization',
			name: 'Toronto Escapes',
		},
		{
			'@context': 'https://schema.org',
			'@type': 'Organization',
			name: 'Norwegian Cruise Line',
		},
		{
			'@context': 'https://schema.org',
			'@type': 'Organization',
			name: 'MSC Cruises',
		},
		{
			'@context': 'https://schema.org',
			'@type': 'Organization',
			name: 'Club Premier',
		},
		{
			'@context': 'https://schema.org',
			'@type': 'Organization',
			name: 'South African Airways',
		},
		{
			'@context': 'https://schema.org',
			'@type': 'Organization',
			name: 'South Bahamas Paradise Cruise Line',
		},
		{
			'@context': 'https://schema.org',
			'@type': 'Organization',
			name: 'Cayman Islands Yellow Pages',
		},
		{
			'@context': 'https://schema.org',
			'@type': 'Organization',
			name: 'Woodspring Hotels',
		},
		{
			'@context': 'https://schema.org',
			'@type': 'Organization',
			name: 'Meliã Hotels & Resorts',
		},
		{
			'@context': 'https://schema.org',
			'@type': 'Organization',
			name: 'CopaAirlines',
		},
		{
			'@context': 'https://schema.org',
			'@type': 'Organization',
			name: 'Crystal Cruises',
		},
		{
			'@context': 'https://schema.org',
			'@type': 'Organization',
			name: 'AeroMexico',
		},
		{
			'@context': 'https://schema.org',
			'@type': 'Organization',
			name: 'Polynesian Cultural Center',
		},
		{
			'@context': 'https://schema.org',
			'@type': 'Organization',
			name: 'Children\'s Cancer Caring Center',
		},
		{
			'@context': 'https://schema.org',
			'@type': 'Organization',
			name: 'Girl Scouts of Hawaii',
		},
		{
			'@context': 'https://schema.org',
			'@type': 'Organization',
			name: 'SelectQuote',
		},
		{
			'@context': 'https://schema.org',
			'@type': 'Organization',
			name: 'MidiCi',
		},
		{
			'@context': 'https://schema.org',
			'@type': 'Organization',
			name: 'Alert Alarm',
		},
	]

	const Worldmedia: Organization & { '@context': 'https://schema.org' } = {
		'@context': 'https://schema.org',
		'@type': 'Organization',
		description,
		image: `${siteUrl}${graphImg}`,
		name: title,
		email: `hello@worldmedia.net`,
		telephone: phoneNumber,
		address,
		url: siteUrl,
		award: ['Gold Magellan x2'],
		contactPoint: {
			'@type': 'ContactPoint',
			contactType: 'sales',
			telephone: phoneNumber,
			url: 'https://www.worldmedia.net/contact/message-us',
		},
		sameAs: [
			'https://www.facebook.com/WorldmediaInteractive',
			'https://twitter.com/worldmediamiami',
			'https://www.instagram.com/worldmedia_interactive/',
			'https://www.linkedin.com/company/worldmedia-interactive',
			'https://www.youtube.com/user/WorldmediaMiami',
		],
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
