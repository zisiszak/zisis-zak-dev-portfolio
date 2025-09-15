import * as React from 'react';
import { Seo } from '../../components/seo';
import { graphql, PageProps } from 'gatsby';

const ProjectPage = ({
	children,
	data,
}: PageProps<Queries.ProjectByIdQuery>) => {
	return (
		<main>
			<article>
				<h2>{data.mdx?.frontmatter?.title}</h2>
				{children}
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
