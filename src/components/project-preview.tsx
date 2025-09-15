import { Link } from 'gatsby';
import * as React from 'react';

interface Props {
	id: string;
	// frontmatter props
	title: string;
	slug: string;
	excerpt: string;
}

export const ProjectPreview = ({ title, slug, excerpt }: Props) => {
	return (
		<article>
			<Link to={`/projects${slug}`}>
				<h2>{title}</h2>
				<p>{excerpt}</p>
			</Link>
		</article>
	);
};
