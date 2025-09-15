import { graphql, PageProps } from 'gatsby';
import { Seo } from '../../components/seo';
import * as React from 'react';
import { ProjectLink } from '../../components/project-link';
import { Layout } from '../../components/layout';
import { markdownStyles } from '../../styles/markdown';

const ProjectsPage = ({ data }: PageProps<Queries.AllProjectsQuery>) => {
	return (
		<Layout>
			<div className="mx-auto max-w-3xl">
				<h2 className={markdownStyles.h2}>Projects</h2>
				<div className="flex flex-col gap-8">
					{data.allMdx.nodes.map((node) => (
						<ProjectLink
							key={node.fields?.slug}
							title={node.frontmatter!.title!}
							id={node.id}
							excerpt={node.excerpt!}
							slug={node.fields?.slug!}
						/>
					))}
				</div>
			</div>
		</Layout>
	);
};

export const query = graphql`
	query AllProjects {
		allMdx(sort: { frontmatter: { title: DESC } }) {
			nodes {
				frontmatter {
					title
					technologies
					repositoryUrl
				}
				fields {
					slug
				}
				id
				excerpt(pruneLength: 100)
			}
		}
	}
`;

export const Head = () => <Seo title="Projects" />;

export default ProjectsPage;
