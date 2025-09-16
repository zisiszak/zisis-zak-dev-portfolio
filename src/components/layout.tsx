import { Link } from 'gatsby';
import { useSiteMetadata } from '../hooks/use-site-metadata';
import * as React from 'react';

export const Layout = ({ children }: React.PropsWithChildren) => {
	const { title: siteTitle, author } = useSiteMetadata();

	return (
		<>
			<div className="px-6 pt-6 md:pt-8">
				<div className="mx-auto max-w-3xl">
					<nav className="flex flex-row gap-8 justify-between items-center">
						<div>
							<h1 className="text-xl md:text-2xl leading-6 md:leading-8 font-bold relative ">
								{siteTitle}
							</h1>
							<p className="md:text-lg">by {author}</p>
						</div>
						<Link
							activeClassName="dark:bg-amber-50 dark:text-neutral-900 bg-neutral-900 text-amber-50 active:opacity-100 dark:hover:border-amber-50 hover:border-neutral-900 dark:border-amber-50 border-neutral-900"
							className="border-2 dark:border-amber-50 border-neutral-900 font-bold px-4 py-1 active:opacity-50 dark:hover:border-red-400 md:text-base text-sm hover:border-red-600 relative"
							to="/"
						>
							Home
						</Link>
					</nav>
					<nav className="flex flex-row gap-4 mt-4 border-b-2 dark:border-amber-50 border-neutral-900 "></nav>
				</div>
			</div>
			<main className="px-6 md:py-20 py-8">{children}</main>
		</>
	);
};
