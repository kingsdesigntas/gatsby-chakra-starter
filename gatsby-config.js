module.exports = {
	siteMetadata: {
		title: "gatsby-chakra-starter",
		description:
			"This string will be set as the site's default metadescription. The image option below will be a concatenation of siteUrl and image, which will be the default social sharing image.",
		siteUrl: "https://kingsdesign.com.au",
		image: "/static/getanimagespublicurlfromgraphqlplayground.jpg",
	},
	plugins: [
		"@chakra-ui/gatsby-plugin",
		"gatsby-plugin-preact",
		"gatsby-plugin-root-import",
		"gatsby-plugin-image",
		"gatsby-plugin-react-helmet",
		"gatsby-plugin-sitemap",
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: `Chakra Starter`,
				short_name: `Chakra Starter`,
				start_url: `/`,
				background_color: `#ed6e2e`,
				theme_color: `#fff`,
				display: `standalone`,
				icon: `./src/images/icon.svg`,
			},
		},
		"gatsby-plugin-sharp",
		"gatsby-transformer-sharp",
		{
			resolve: "gatsby-source-filesystem",
			options: {
				name: "images",
				path: "./src/images/",
			},
			__key: "images",
		},
		{
			resolve: "gatsby-source-filesystem",
			options: {
				name: "pages",
				path: "./src/pages/",
			},
			__key: "pages",
		},
		{
			resolve: `gatsby-plugin-mdx`,
			options: {
				defaultLayouts: {
					default: require.resolve("./src/components/LayoutMdx.js"),
				},
				gatsbyRemarkPlugins: [
					{
						resolve: `gatsby-remark-images`,
						options: {
							maxWidth: 1280,
							linkImagesToOriginal: false,
						},
					},
				],
			},
		},
	],
};
