import { Link } from 'gatsby';
import { GatsbyImage, type IGatsbyImageData } from 'gatsby-plugin-image';
import * as React from 'react';

interface Props {
	id: string;
	// frontmatter props
	title: string;
	slug: string;
	excerpt: string;
	repositoryUrl?: string | null;
	heroImageAlt?: string | null;
	heroImage?: IGatsbyImageData | null;
}

export const ProjectLink = ({
	title,
	slug,
	excerpt,
	heroImage,
	heroImageAlt,
}: Props) => {
	return (
		<article>
			<Link
				to={`/projects${slug}`}
				className="group px-6 py-4 md:px-8 md:py-6 border-2 dark:border-amber-50 border-neutral-900 flex flex-col md:flex-row md:gap-8 gap-6 justify-between hover:border-red-600 dark:hover:border-red-400 active:opacity-40"
				title="View project"
			>
				<div className="md:min-w-64">
					<h2 className="font-bold md:text-xl text-lg">{title}</h2>
					<p className="md:text-base text-sm opacity-75 md:line-clamp-none line-clamp-2">
						{excerpt}
					</p>
				</div>
				{heroImage && (
					<GatsbyImage
						image={heroImage}
						alt={heroImageAlt!}
						className="w-full h-full md:max-w-48 object-cover object-center max-h-40 md:max-h-48 md:aspect-square overflow-hidden"
					/>
				)}
			</Link>
		</article>
	);
};
