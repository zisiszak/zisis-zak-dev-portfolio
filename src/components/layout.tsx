import { Link } from 'gatsby';
import { useSiteMetadata } from '../hooks/use-site-metadata';
import * as React from 'react';

export const Layout = ({ children }: React.PropsWithChildren) => {
	const { title: siteTitle, author } = useSiteMetadata();

	return (
		<>
			<nav className="px-6 py-6 lg:py-8 bg-amber-50 border-b-4 dark:bg-neutral-900 dark:text-amber-50 dark:border-amber-50">
				<div className="mx-auto max-w-3xl">
					<header>
						<h1 className="text-xl lg:text-2xl leading-6 lg:leading-8 font-bold relative text-center">
							{siteTitle}
						</h1>
						<p className="lg:text-lg text-center">by {author}</p>
					</header>
					<Link to="/projects">Projects</Link>
				</div>
			</nav>
			<main className="px-6 lg:py-20 py-12">{children}</main>
		</>
	);
};
