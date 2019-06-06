require(`dotenv`).config()

const { join } = require(`path`)
const {
	themeColor,
	backgroundColor,
} = require(`./src/cms/content/design/design.json`)
const {
	googleAnalyticsKey,
	googleAnalyticsViewID,
	dayCountForPrefetching,
} = require(`./src/cms/content/analytics/analytics.json`)

const { NODE_ENV, GA_PRIVATE_KEY, GA_CLIENT_EMAIL } = process.env

// Guess.js date range
const endDate = new Date()
const startDate = new Date().setDate(endDate.getDate() - dayCountForPrefetching)

// Replaces a tags in netlify markdown files with Link component
const netlifyCmsPaths = {
	resolve: `gatsby-plugin-netlify-cms-paths`,
	options: {
		cmsConfig: `/static/admin/config.yml`,
	},
}

const gatsbyConfig = {
	siteMetadata: {
		title: `Worldmedia Interactive`,
		description: `Full Service Advertising & Marketing Agency offering SEM, SEO, Display, Social & Traditional Media Services in Miami, Toronto, Hawaii, Orlando and L.A.`,
		author: `Dylan Tackoor`,
		siteUrl: `https://wmi.io`,
	},
	plugins: [
		{
			resolve: `gatsby-plugin-humans-txt`,
			options: {
				team: [
					{
						Developer: `Dylan Tackoor`,
						GitHub: `dylantackoor`,
						Twitter: `@dylantackoor`,
					},
				],
				thanks: [`Gatsby`, `Node`],
				site: {
					'Last update': `2019/4/16`,
					Standards: `JavaScript`,
					Components: `humans-generator`,
					Softwares: `Visual Studio Code`,
				},
				note: `Made in Miami.`,
			},
		},

		// Type safety
		`gatsby-plugin-typescript`,
		`gatsby-plugin-tslint`,

		// Image optimizations for GraphQL queries
		`gatsby-transformer-sharp`,
		`gatsby-plugin-sharp`,

		// Git based serverless CMS

		{
			resolve: `gatsby-plugin-netlify-cms`,
			options: {
				modulePath: join(__dirname, `src`, `cms`, `cms.ts`),
				enableIdentityWidget: true,
				publicPath: `/admin`,
				htmlTitle: `WMi CMS`,
			},
		},

		// Intercepts local links & replaces w/gatsby-link
		`gatsby-plugin-catch-links`,

		// Including in your Gatsby plugins will transform any paths in your frontmatter
		netlifyCmsPaths,

		// Converts markdown to html
		{
			resolve: `gatsby-transformer-remark`,
			options: {
				plugins: [
					// Including in your Remark plugins will transform any paths in your markdown body
					netlifyCmsPaths,

					// Use gatsby-image with markdown files
					{
						resolve: `gatsby-remark-images`,
						options: {
							maxWidth: 930,
							backgroundColor: `transparent`,
						},
					},
				],
			},
		},

		// Creates graphql nodes for json files
		`gatsby-transformer-json`,

		// Adds graphql nodes for files in local dirs
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `data`,
				path: join(__dirname, `src`, `cms`, `content`),
			},
		},
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `images`,
				path: join(__dirname, `src`, `images`),
			},
		},
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `markdown-pages`,
				path: join(__dirname, `src`, `posts`),
			},
		},

		// SSR support for emotion CSS-In-JS
		`gatsby-plugin-emotion`,

		// SSR support for Helmet meta tags
		`gatsby-plugin-react-helmet`,

		// generates manifest.json: https://developers.google.com/web/fundamentals/web-app-manifest/
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: `Worldmedia Interactive`,
				short_name: `WMi`,
				start_url: `/`,
				background_color: backgroundColor,
				theme_color: themeColor,
				display: `standalone`,
				icon: `src/images/icon.png`, // TODO: pregenerate these images
				theme_color_in_head: true,
				include_favicon: true,
			},
		},

		// Adds canonical URLs: https://en.wikipedia.org/wiki/Canonical_link_element
		{
			resolve: `gatsby-plugin-canonical-urls`,
			options: {
				siteUrl: `https://wmi.io`,
			},
		},

		// Async load fonts
		// TODO: look into alternatives
		{
			resolve: `gatsby-plugin-web-font-loader`,
			options: {
				google: {
					families: [`Montserrat`, `Roboto+Slab`],
				},
			},
		},

		// Notifies you of accessibility issues
		{
			resolve: `gatsby-plugin-accessibilityjs`,
			options: {
				onError: error => {
					/* eslint-disable no-console */
					console.error(`error`)
					console.error(error)
					/* eslint-enable no-console */
				},
				errorClassName: NODE_ENV !== `production`,
				injectStyles:
					NODE_ENV === `production`
						? false
						: `
        .accessibility-error {
          box-shadow: 0 0 3px 1px #f00;
          background-color: rgba(255, 0, 0, 0.25);
          position: relative;
        }
        .accessibility-error:before {
          content: "A11Y";
          position: absolute;
          top: 0;
          left: 0;
          color: #fff;
          font-size: 10px;
          background-color: rgba(255, 0, 0, 0.5);
          transform: translateY(-100%);
        }
      `,
			},
		},

		// Generates sitemap: https://www.sitemaps.org/
		`gatsby-plugin-sitemap`,

		// TODO: enter real GTM Id
		// {
		// 	resolve: `gatsby-plugin-google-tagmanager`,
		// 	options: {
		// 		id: `GTM-W4XMD6J`,
		// 		includeInDevelopment: false,
		// 	},
		// },

		{
			resolve: `gatsby-plugin-google-analytics`,
			options: {
				trackingId: googleAnalyticsKey,
				head: true,
			},
		},

		// Google Analytics based predictive prefetching
		{
			resolve: `gatsby-plugin-guess-js`,
			options: {
				GAViewID: googleAnalyticsViewID,
				jwt: {
					// HACK: fixes dotenv newline character support
					private_key: JSON.parse(`"${GA_PRIVATE_KEY}"`),
					client_email: GA_CLIENT_EMAIL,
				},
				minimumThreshold: 0.03,
				period: {
					startDate,
					endDate,
				},
			},
		},

		// Content Security Policy
		{
			resolve: `gatsby-plugin-csp`,
			options: {
				disableOnDev: false,
				mergeScriptHashes: true,
				mergeStyleHashes: true,
				mergeDefaultDirectives: true,
				directives: {
					'script-src': `'self' https://www.google-analytics.com`,
					'style-src': `'self' 'unsafe-inline' https://fonts.googleapis.com`,
					'img-src': `'self' data: https://www.google-analytics.com`,
					'font-src': `'self' data: https://fonts.gstatic.com`,
					'frame-src': `'self' https://www.youtube-nocookie.com`,
				},
			},
		},

		// File compression
		`gatsby-plugin-zopfli`,
		`gatsby-plugin-brotli`,

		// // Logs bundle sizes
		// {
		// 	resolve: `gatsby-plugin-webpack-size`,
		// 	options: {
		// 		development: false,
		// 	},
		// },

		// Generates site to visualize site dependencies
		{
			resolve: `gatsby-plugin-webpack-bundle-analyzer`,
			options: {
				defaultSizes: `gzip`,
				analyzerPort: 8001,
				production: false,
			},
		},

		// Utilize undocumented Netlify build server cache
		`gatsby-plugin-netlify-cache`,

		{
			resolve: `gatsby-plugin-humans-txt`,
			options: {
				team: [
					{
						Developer: `Dylan Tackoor`,
						GitHub: `dylantackoor`,
						Twitter: `@dylantackoor`,
					},
				],
				thanks: [`Gatsby`, `Node`],
				site: {
					'Last update': `2019/4/16`,
					Standards: `JavaScript`,
					Components: `humans-generator`,
					Softwares: `Visual Studio Code`,
				},
				note: `Made in Miami.`,
			},
		},

		// make sure to put last in the array
		{
			resolve: `gatsby-plugin-netlify`,
			options: {
				headers: {
					'/*': [`dylan: was here`],
				},
			},
		},
	],
}

module.exports = gatsbyConfig
