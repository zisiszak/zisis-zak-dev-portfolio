import * as React from 'react';
import { Seo } from '../../components/seo';
import { graphql, HeadProps, PageProps } from 'gatsby';
import { MarkdownWrapper } from '../../components/markdown-wrapper';
import { Layout } from '../../components/layout';
import { GithubIcon } from '../../components/icons';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { markdownStyles } from '../../styles/markdown';

const ProjectPage = ({
	children,
	data,
}: PageProps<Queries.ProjectByIdQuery>) => {
	const repositoryUrl = data.mdx?.frontmatter?.repositoryUrl;
	const gallery = data.mdx?.frontmatter?.gallery;

	const gallerySet = gallery?.map((item) => ({
		imageId: item?.image ? item.image.id : item?.animatedImage?.id,
		gatsbyImage: item?.image
			? getImage(item.image.childImageSharp?.gatsbyImageData!)
			: null,
		animatedImage: item?.animatedImage
			? item.animatedImage.childImageSharp?.original?.src
			: null,
		caption: item?.caption,
		alt: item?.alt,
	}));

	return (
		<Layout>
			<article>
				<div className="mx-auto max-w-3xl">
					<header className="md:mb-10 mb-8">
						<h1
							className={
								'text-3xl md:text-4xl font-bold leading-10 md:leading-11'
							}
						>
							{data.mdx?.frontmatter?.title}
						</h1>
						<div className="flex justify-between flex-row gap-4 items-center flex-wrap md:mt-4 mt-3">
							{/* Technologies */}
							<div className="flex flex-row flex-wrap gap-1 md:gap-2">
								{data.mdx?.frontmatter?.technologies?.map(
									(keyword) => (
										<div
											className="dark:border-green-400 border-neutral-600 border-2 font-bold md:text-sm text-xs md:px-1.5  md:py-1 px-1 py-0.5"
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
									className="flex flex-row items-center gap-2 w-fit  overflow-hidden group flex-none text-sm md:text-base active:opacity-40"
								>
									<GithubIcon className="md:w-6 md:h-6 h-5 w-5" />
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

					{gallerySet && gallerySet.length !== 0 && (
						<>
							<h2 className={markdownStyles.h2}>Gallery</h2>
							<div className="grid gap-20">
								{gallerySet.map(
									({
										gatsbyImage,
										caption,
										alt,
										imageId,
										animatedImage,
									}) => (
										<figure
											key={imageId}
											className="text-center w-fit mx-auto h-fit"
										>
											{gatsbyImage && (
												<GatsbyImage
													image={gatsbyImage}
													alt={alt!}
													className="h-full max-h-[80dvh] overflow-hidden"
													objectFit="contain"
												/>
											)}
											{animatedImage && (
												<img
													src={animatedImage}
													alt={alt!}
													loading="lazy"
													className="h-full max-h-[80dvh] object-contain mx-auto"
												/>
											)}
											{caption && (
												<figcaption className="text-xs md:text-sm opacity-75 mt-0.5">
													{caption}
												</figcaption>
											)}
										</figure>
									),
								)}
							</div>
						</>
					)}
				</div>
			</article>
		</Layout>
	);
};

export const Head = ({ data }: HeadProps<Queries.ProjectByIdQuery>) => (
	<Seo title={data?.mdx?.frontmatter?.title ?? undefined}></Seo>
);

export const query = graphql`
	query ProjectById($id: String) {
		mdx(id: { eq: $id }) {
			frontmatter {
				title
				technologies
				repositoryUrl
				gallery {
					image {
						id
						childImageSharp {
							gatsbyImageData
							original {
								src
							}
						}
					}
					animatedImage {
						id
						childImageSharp {
							original {
								src
							}
						}
					}
					caption
					alt
				}
			}
		}
	}
`;

export default ProjectPage;
