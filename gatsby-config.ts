import type { GatsbyConfig } from 'gatsby';

const config: GatsbyConfig = {
	pathPrefix: '/zisis-zak-dev-portfolio',
	siteMetadata: {
		title: 'A Portfolio',
		author: 'Zisis Zak Tsiouklas',
		siteUrl: 'https://www.yourdomain.tld',
		image: '',
		description: '',
	},
	// More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
	// If you use VSCode you can also use the GraphQL plugin
	// Learn more at: https://gatsby.dev/graphql-typegen
	graphqlTypegen: true,
	plugins: [
		'gatsby-plugin-postcss',
		'gatsby-plugin-image',
		'gatsby-plugin-sharp',
		'gatsby-transformer-sharp',
		{
			resolve: 'gatsby-plugin-mdx',
			options: {
				gatsbyRemarkPlugins: [
					{
						resolve: 'gatsby-remark-images',
						options: {
							maxWidth: 720,
						},
					},
				],
			},
		},
		{
			resolve: 'gatsby-source-filesystem',
			options: {
				name: 'images',
				path: './src/images/',
			},
			__key: 'images',
		},
		{
			resolve: 'gatsby-source-filesystem',
			options: {
				name: 'pages',
				path: './src/pages/',
			},
			__key: 'pages',
		},
		{
			resolve: 'gatsby-source-filesystem',
			options: {
				name: 'projects',
				path: './projects/',
			},
			__key: 'projects',
		},
		{
			resolve: 'gatsby-plugin-react-svg',
			options: {
				rule: {
					include: /\.inline\.svg$/,
				},
			},
		},
		{
			resolve: 'gatsby-plugin-manifest',
			options: {
				name: 'A Portfolio by Zisis Zak',
				short_name: 'A Portfolio',
				start_url: '/',
				background_color: '#171717',
				theme_color: '#171717',
				icon: 'src/images/icon.png',
			},
		},
	],
};

export default config;
