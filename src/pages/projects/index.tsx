import { graphql, PageProps } from 'gatsby';
import { Seo } from '../../components/seo';
import * as React from 'react';
import { ProjectPreview } from '../../components/project-preview';

const ProjectsPage = ({ data }: PageProps<Queries.AllProjectsQuery>) => {
	return (
		<main>
			<div className="flex flex-col gap-8">
				{data.allMdx.nodes.map((node) => (
					<ProjectPreview
						title={node.frontmatter!.title!}
						id={node.id}
						excerpt={node.excerpt!}
						slug={node.frontmatter!.slug!}
					/>
				))}
			</div>
		</main>
	);
};

export const query = graphql`
	query AllProjects {
		allMdx(sort: { frontmatter: { title: DESC } }) {
			nodes {
				frontmatter {
					title
					technologies
					slug
					repositoryUrl
				}
				id
				excerpt(pruneLength: 100)
			}
		}
	}
`;

export const Head = () => <Seo title="Projects" />;

export default ProjectsPage;
