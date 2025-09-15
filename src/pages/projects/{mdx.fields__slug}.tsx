import * as React from 'react';
import { Seo } from '../../components/seo';
import { graphql, PageProps } from 'gatsby';
import { MarkdownWrapper } from '../../components/markdown-wrapper';
import { markdownStyles } from '../../styles/markdown';
import { Layout } from '../../components/layout';

const ProjectPage = ({
	children,
	data,
}: PageProps<Queries.ProjectByIdQuery>) => {
	return (
		<Layout>
			<article>
				<div className="mx-auto max-w-3xl">
					<h1 className={markdownStyles.h1}>
						{data.mdx?.frontmatter?.title}
					</h1>
					<MarkdownWrapper>{children}</MarkdownWrapper>
				</div>
			</article>
		</Layout>
	);
};

export const Head = () => <Seo title="Project"></Seo>;

export const query = graphql`
	query ProjectById($id: String) {
		mdx(id: { eq: $id }) {
			frontmatter {
				title
				technologies
				repositoryUrl
			}
		}
	}
`;

export default ProjectPage;
