import { MDXProvider } from '@mdx-js/react';
import * as React from 'react';
import { markdownStyles } from '../styles/markdown';

// This maps out markdown styles
const markdownComponents = Object.fromEntries(
	Object.entries(markdownStyles).map(([Tag, className]) => {
		return [Tag, (props: any) => <Tag {...props} className={className} />];
	}),
);

export const MarkdownWrapper = ({ children }: React.PropsWithChildren) => (
	<MDXProvider components={markdownComponents}>{children}</MDXProvider>
);
