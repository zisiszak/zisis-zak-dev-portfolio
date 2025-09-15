import { Link } from 'gatsby';
import * as React from 'react';

interface Props {
	id: string;
	// frontmatter props
	title: string;
	slug: string;
	excerpt: string;
	repositoryUrl?: string | null;
}

export const ProjectLink = ({ title, slug, excerpt, repositoryUrl }: Props) => {
	return (
		<article>
			<Link
				to={`/projects${slug}`}
				className="group px-6 py-4 lg:px-8 lg:py-6 border-2 dark:border-amber-50 border-neutral-900 flex flex-row gap-4 justify-between hover:border-red-600 dark:hover:border-red-400 active:opacity-40"
				title="View project"
			>
				<div>
					<h2 className="font-bold lg:text-xl text-lg">{title}</h2>
					<p className="lg:text-base text-sm opacity-75 lg:line-clamp-1 line-clamp-2">
						{excerpt}
					</p>
				</div>
			</Link>
		</article>
	);
};
