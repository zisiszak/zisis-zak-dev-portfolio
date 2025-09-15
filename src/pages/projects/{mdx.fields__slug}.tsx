import * as React from 'react';
import { Seo } from '../../components/seo';
import { graphql, PageProps } from 'gatsby';
import { MarkdownWrapper } from '../../components/markdown-wrapper';
import { markdownStyles } from '../../styles/markdown';

const ProjectPage = ({
	children,
	data,
}: PageProps<Queries.ProjectByIdQuery>) => {
	return (
		<main>
			<article>
				<h1 className={markdownStyles.h1}>
					{data.mdx?.frontmatter?.title}
				</h1>
				<MarkdownWrapper>{children}</MarkdownWrapper>
			</article>
		</main>
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
