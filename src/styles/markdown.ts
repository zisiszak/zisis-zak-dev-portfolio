import { MDXComponents } from 'mdx/types';

const h1 =
	'text-2xl lg:text-3xl font-bold leading-10 lg:leading-11 lg:mb-6 mb-5';

const h2 =
	'text-xl lg:text-2xl font-bold leading-8 lg:leading-9 lg:mb-4 mb-3 lg:mt-8 mt-7';

const h3 =
	'text-lg lg:text-xl font-bold lg:leading-8 leading-7 lg:mb-3 mb-2 lg:mt-6 mt-5';

const h4 =
	'lg:text-lg font-bold lg:leading-7 leading-6 lg:mb-2 mb-1 lg:mt-5 mt-4';

const ul = 'list-disc list-outside pl-4 lg:text-lg lg:leading-7';

const code = 'dark:text-red-400 text-red-600';

const p = 'leading-6 mb-4 lg:text-lg lg:leading-7 lg:mb-5';

export const markdownStyles = {
	h1,
	h2,
	h3,
	h4,
	ul,
	code,
	p,
} as const satisfies {
	[key: keyof MDXComponents]: string;
};
