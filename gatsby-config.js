const { NODE_ENV } = process.env

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
		phoneNumber: `+1305-572-0404`,
		blogPathPath: `/blog/`,
	},
	plugins: [
		// Type safety
		`gatsby-plugin-typescript`,
		`gatsby-plugin-tslint`,

		// Image optimizations for GraphQL queries
		`gatsby-transformer-sharp`,
		`gatsby-plugin-sharp`,

		{
			resolve: `gatsby-plugin-netlify-cms`,
			options: {
				modulePath: `${__dirname}/src/cms/cms.ts`,
				enableIdentityWidget: true,
				publicPath: `/admin`,
				htmlTitle: `WMi CMS`,
			},
		},

		{
			resolve: `gatsby-plugin-netlify`,
			options: {
				headers: {
					'/*': [`Dylan: was here`],
				},
			},
		},

		// Ensures Gatsby catches all links for optimization
		`gatsby-plugin-catch-links`,

		// Including in your Gatsby plugins will transform any paths in your frontmatter
		netlifyCmsPaths,
		{
			resolve: `gatsby-transformer-remark`,
			options: {
				plugins: [
					// Including in your Remark plugins will transform any paths in your markdown body
					netlifyCmsPaths,
					{
						resolve: `gatsby-remark-images`,
						options: {
							// It's important to specify the maxWidth (in pixels) of
							// the content container as this plugin uses this as the
							// base for generating different widths of each image.
							maxWidth: 930,
							backgroundColor: `transparent`, // required to display blurred image first
						},
					},
				],
			},
		},

		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `images`,
				path: `${__dirname}/src/images`,
			},
		},

		// Links blog post entries
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				path: `${__dirname}/src/posts`,
				name: `markdown-pages`,
			},
		},
		// `gatsby-transformer-remark`,

		// Create compnents & styling together
		{
			resolve: `gatsby-plugin-emotion`,
			options: {
				// Accepts all options defined by `babel-plugin-emotion` plugin.
			},
		},

		// Sets elements in <head>
		`gatsby-plugin-react-helmet`,

		// TODO: pregenerate these images
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: `Worldmedia Interactive`,
				short_name: `WMi`,
				start_url: `/`,
				background_color: `#EC008C`,
				theme_color: `#EC008C`,
				display: `standalone`,
				icon: `src/images/icon.png`, // TODO: update this image
				theme_color_in_head: true,
				include_favicon: true,
			},
		},

		// Adds canonical URLs
		// https://en.wikipedia.org/wiki/Canonical_link_element
		{
			resolve: `gatsby-plugin-canonical-urls`,
			options: {
				siteUrl: `https://wmi.io`,
			},
		},

		// Async load fonts
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
		// {
		// 	resolve: `gatsby-plugin-guess-js`,
		// 	options: {
		// 		// Find the view id in the GA admin in a section labeled "views"
		// 		GAViewID: `VIEW_ID`,
		// 		minimumThreshold: 0.03,
		// 		period: {
		// 			startDate: new Date(`2019-1-1`),
		// 			endDate: new Date(),
		// 		},
		// 	},
		// },
		// {
		// 	resolve: `gatsby-plugin-google-analytics`,
		// 	options: {
		// 		trackingId: `YOUR_GOOGLE_ANALYTICS_TRACKING_ID`,
		// 		// Puts tracking script in the head instead of the body
		// 		head: false,
		// 		// Setting this parameter is optional
		// 		anonymize: true,
		// 		// Setting this parameter is also optional
		// 		respectDNT: true,
		// 		// Avoids sending pageview hits from custom paths
		// 		exclude: [`/preview/**`, `/do-not-track/me/too/`],
		// 		// Enables Google Optimize using your container Id
		// 		optimizeId: `YOUR_GOOGLE_OPTIMIZE_TRACKING_ID`,
		// 		// Enables Google Optimize Experiment ID
		// 		experimentId: `YOUR_GOOGLE_EXPERIMENT_ID`,
		// 		// Set Variation ID. 0 for original 1,2,3....
		// 		variationId: `YOUR_GOOGLE_OPTIMIZE_VARIATION_ID`,
		// 		// Any additional create only fields (optional)
		// 		sampleRate: 5,
		// 		siteSpeedSampleRate: 10,
		// 		cookieDomain: `example.com`,
		// 	},
		// },

		// File compression
		`gatsby-plugin-zopfli`,
		`gatsby-plugin-brotli`,

		// // Logs sizes of compiled assets
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
		{
			resolve: `gatsby-plugin-netlify-cache`,
			// options: {
			// 	extraDirsToCache: ["extraDir", ".extraDotDir", "extra/dir"],
			// },
		},
	],
}

module.exports = gatsbyConfig
