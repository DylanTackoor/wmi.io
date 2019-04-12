const { join } = require(`path`)
const {
	themeColor,
	backgroundColor,
} = require(`./src/cms/content/design/design.json`)

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
		siteUrl: `https://crystal.banners.crystal.banners.wmi.io`,
	},
	plugins: [
		// Type safety
		`gatsby-plugin-typescript`,
		`gatsby-plugin-tslint`,

		{
			resolve: `gatsby-plugin-netlify-cms`,
			options: {
				modulePath: join(__dirname, `src`, `cms`, `cms.ts`),
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
				],
			},
		},

		`gatsby-transformer-json`,
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `data`,
				path: join(__dirname, `src`, `cms`, `content`),
			},
		},

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
		// {
		// 	resolve: `gatsby-plugin-manifest`,
		// 	options: {
		// 		name: `Worldmedia Interactive`,
		// 		short_name: `WMi`,
		// 		start_url: `/`,
		// 		background_color: backgroundColor,
		// 		theme_color: themeColor,
		// 		display: `standalone`,
		// 		icon: `src/images/icon.png`, // TODO: update this image
		// 		theme_color_in_head: true,
		// 		include_favicon: true,
		// 	},
		// },

		// Adds canonical URLs
		// https://en.wikipedia.org/wiki/Canonical_link_element
		{
			resolve: `gatsby-plugin-canonical-urls`,
			options: {
				siteUrl: `https://crystal.banners.wmi.io`,
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
				errorClassName: process.env.NODE_ENV !== `production`,
				injectStyles:
					process.env.NODE_ENV === `production`
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

		// {
		// 	resolve: `gatsby-plugin-google-analytics`,
		// 	options: {
		// 		trackingId: googleAnalyticsKey,
		// 		head: true,
		// 	},
		// },

		// File compression
		`gatsby-plugin-zopfli`,
		`gatsby-plugin-brotli`,

		// Content Security Policy
		{
			resolve: `gatsby-plugin-csp`,
			options: {
				disableOnDev: true,
				mergeScriptHashes: true,
				mergeStyleHashes: true,
				mergeDefaultDirectives: true,
				directives: {
					'script-src': `'self' https://www.google-analytics.com`,
					'style-src': `'self' 'unsafe-inline' https://fonts.googleapis.com`,
					'img-src': `'self' data: https://www.google-analytics.com`,
					'font-src': `'self' data: https://fonts.gstatic.com`,
				},
			},
		},

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
