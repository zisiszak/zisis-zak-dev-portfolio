import * as React from 'react';
import { useSiteMetadata } from '../hooks/use-site-metadata';

interface Props {
	title?: string;
	description?: string;
}

export const Seo = ({ title, description }: Props) => {
	const {
		title: defaultTitle,
		description: defaultDescription,
		image,
		siteUrl,
	} = useSiteMetadata();

	const seo = {
		title: title ?? defaultTitle,
		description: description ?? defaultDescription,
		image,
		url: siteUrl,
	};

	return (
		<>
			<title>{seo.title}</title>
			<meta name="description" content={seo.description} />
			<meta name="image" content={seo.image} />
		</>
	);
};
