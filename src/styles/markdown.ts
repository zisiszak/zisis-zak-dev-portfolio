import { MDXComponents } from 'mdx/types';

const h1 =
	'text-3xl md:text-4xl font-bold leading-10 md:leading-11 md:mb-10 mb-8';

const h2 =
	'text-xl md:text-2xl font-bold leading-8 md:leading-9 md:mb-4 mb-3 md:mt-8 mt-7';

const h3 =
	'text-lg md:text-xl font-bold md:leading-8 leading-7 md:mb-3 mb-2 md:mt-6 mt-5';

const h4 =
	'md:text-lg font-bold md:leading-7 leading-6 md:mb-2 mb-1 md:mt-5 mt-4';

const ul = 'list-disc list-outside pl-4 md:text-lg md:leading-7';

const code = 'dark:text-red-400 text-red-600';

const p = 'leading-6 mb-4 md:text-lg md:leading-7 md:mb-5';

const a = 'underline';

export const markdownStyles = {
	h1,
	h2,
	h3,
	h4,
	ul,
	code,
	p,
	a,
} as const satisfies {
	[key: keyof MDXComponents]: string;
};
