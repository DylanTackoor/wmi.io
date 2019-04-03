const { NODE_ENV } = process.env

const netlifyCmsPaths = {
	resolve: `gatsby-plugin-netlify-cms-paths`,
	options: {
		cmsConfig: `/static/admin/config.yml`,
	},
}

const gatsbyConfig = {
	siteMetadata: {
		title: `PlantVine`,
		description: `Interior & exterior plants, tropicals, fruit trees, exotics, bromeliads, palms and more. All from the source. Order online or call us at 888-361-9998.`,
		author: `@plantvine`,
		siteUrl: `https://plantvine.netlify.com`,
	},
	plugins: [
		// Utilize undocumented Netlify build server cache
		{
			resolve: `gatsby-plugin-netlify-cache`,
			// options: {
			// 	extraDirsToCache: ["extraDir", ".extraDotDir", "extra/dir"],
			// },
		},

		// Type safety
		`gatsby-plugin-typescript`,
		`gatsby-plugin-tslint`,

		{
			resolve: `gatsby-source-stripe`,
			options: {
				objects: [`Product`, `Sku`],
				// TODO: reset this read only dev key and tie to env var later
				secretKey: `rk_test_6MzwVtWMTn13SWMkNtJ1irRl`,
				downloadFiles: true,
			},
		},
		{
			resolve: `gatsby-plugin-stripe`,
			options: {
				async: true,
			},
		},

		// Image optimizations for GraphQL queries
		`gatsby-transformer-sharp`,
		`gatsby-plugin-sharp`,

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
			resolve: `gatsby-plugin-netlify-cms`,
			options: {
				enableIdentityWidget: true,
				htmlTitle: `PlantVine CMS`,
			},
		},
		{
			resolve: `gatsby-plugin-netlify-functions`,
			options: {
				functionsSrc: `${__dirname}/src/api`,
				functionsOutput: `${__dirname}/functions`,
			},
		},

		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `images`,
				path: `${__dirname}/src/images`,
			},
		},

		// TODO: Link FAQs
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				path: `${__dirname}/src/faqs`,
				name: `faqs`,
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
		`gatsby-transformer-remark`,

		// Create compnents & styling together
		{
			resolve: `gatsby-plugin-emotion`,
			options: {
				// Accepts all options defined by `babel-plugin-emotion` plugin.
			},
		},

		// TODO: pregenerate these images
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: `PlantVine`,
				short_name: `PlantVine`,
				start_url: `/`,
				background_color: `#b4dca0`,
				theme_color: `#b4dca0`,
				display: `standalone`,
				icon: `src/images/icon.png`,
				theme_color_in_head: true,
				include_favicon: true,
			},
		},

		// Sets elements in <head>
		`gatsby-plugin-react-helmet`,

		// Async load fonts
		{
			resolve: `gatsby-plugin-web-font-loader`,
			options: {
				google: {
					families: [`Dosis`],
				},
			},
		},

		// Adds canonical URLs
		// https://en.wikipedia.org/wiki/Canonical_link_element
		{
			resolve: `gatsby-plugin-canonical-urls`,
			options: {
				siteUrl: `https://plantvine.netlify.com`,
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

		// Logs sizes of compiled assets
		{
			resolve: `gatsby-plugin-webpack-size`,
			options: {
				development: true,
			},
		},

		// Generates site to visualize site dependencies
		{
			resolve: `gatsby-plugin-webpack-bundle-analyzer`,
			options: {
				defaultSizes: `gzip`,
				analyzerPort: 8001,
				production: false,
			},
		},

		// File compression
		`gatsby-plugin-zopfli`,
		`gatsby-plugin-brotli`,

		// Ensures Gatsby catches all links for optimization
		`gatsby-plugin-catch-links`,

		`gatsby-plugin-netlify`,
	],
}

module.exports = gatsbyConfig
