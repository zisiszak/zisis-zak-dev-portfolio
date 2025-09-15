import { graphql, useStaticQuery } from 'gatsby';
import { RemoveReadonly } from '../utils';

export type SiteMetadata = RemoveReadonly<
	NonNullable<Queries.SiteMetadataQuery['site']>['siteMetadata']
>;

export const useSiteMetadata = () => {
	const data = useStaticQuery(graphql`
		query SiteMetadata {
			site {
				siteMetadata {
					title
					author
					description
					image
					siteUrl
				}
			}
		}
	`) as Queries.SiteMetadataQuery;

	return data.site!.siteMetadata!;
};
