import * as React from 'react';
import { Seo } from '../../components/seo';
import { graphql, PageProps } from 'gatsby';
import { MarkdownWrapper } from '../../components/markdown-wrapper';
import { Layout } from '../../components/layout';
import { GithubIcon } from '../../components/icons';

const ProjectPage = ({
	children,
	data,
}: PageProps<Queries.ProjectByIdQuery>) => {
	const repositoryUrl = data.mdx?.frontmatter?.repositoryUrl;

	return (
		<Layout>
			<article>
				<div className="mx-auto max-w-3xl">
					<header className="lg:mb-10 mb-8">
						<h1
							className={
								'text-3xl lg:text-4xl font-bold leading-10 lg:leading-11'
							}
						>
							{data.mdx?.frontmatter?.title}
						</h1>
						<div className="flex justify-between flex-row gap-4 items-center flex-wrap lg:mt-4 mt-3">
							{/* Technologies */}
							<div className="flex flex-row flex-wrap gap-1 lg:gap-2">
								{data.mdx?.frontmatter?.technologies?.map(
									(keyword) => (
										<div
											className="dark:border-green-400 border-neutral-600 border-2 font-bold lg:text-sm text-xs lg:px-1.5  lg:py-1 px-1 py-0.5"
											key={keyword}
										>
											{keyword}
										</div>
									),
								)}
							</div>
							{repositoryUrl && (
								<a
									title="View on GitHub"
									href={repositoryUrl}
									target="_blank"
									className="flex flex-row items-center gap-2 w-fit  overflow-hidden group flex-none text-sm lg:text-base active:opacity-40"
								>
									<GithubIcon className="lg:w-6 lg:h-6 h-5 w-5" />
									<div className="relative px-2 w-fit overflow-hidden group-hover:rounded-2xl border-l-2 border-red-600 dark:border-red-400 transition-all delay-200 group-hover:border-transparent ">
										<div className="w-full h-full absolute left-0 rounded-2xl border-2 -translate-x-full group-hover:translate-x-0 transition-all duration-300 border-red-600 dark:border-red-400" />
										<span className="relative">
											View on Github
										</span>
									</div>
								</a>
							)}
						</div>
					</header>

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
