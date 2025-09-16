import * as React from 'react';
import { Link, HeadFC, PageProps } from 'gatsby';

const NotFoundPage: React.FC<PageProps> = () => {
	return (
		<main className="p-4 md:p-6 h-svh">
			<div className="border-2 dark:border-amber-50 border-neutral-900 w-full h-full text-center flex items-center justify-center flex-col">
				<h1 className="text-6xl md:text-7xl">404</h1>
				<p className="md:text-lg">"Not Found"</p>
				<Link
					className="px-5 py-1.5 md:px-6 md:py-2 md:text-lg font-bold border-2 dark:border-amber-50 border-neutral-900 mt-4 hover:border-red-600 dark:hover:border-red-400 active:opacity-50"
					to="/"
				>
					Go home
				</Link>
			</div>
		</main>
	);
};

export default NotFoundPage;

export const Head: HeadFC = () => <title>404: Not found</title>;
