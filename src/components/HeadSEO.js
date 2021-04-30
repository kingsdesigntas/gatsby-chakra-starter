import * as React from "react";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";

const getSiteData = graphql`
	query {
		site {
			siteMetadata {
				title
				description
				siteUrl
			}
		}
		file(name: { eq: "defaultSocialShareImage" }) {
			publicURL
		}
	}
`;

const HeadSeo = ({ description, lang, meta, title, image }) => {
	const data = useStaticQuery(getSiteData);
	const metaDescription = description || data.site.siteMetadata.description;
	const defaultTitle = data.site.siteMetadata?.title;
	const pageTitle = title;
	const url = data.site.siteMetadata.siteUrl;
	const manualImage = image;
	const defaultImage = data.file.publicURL;
	const shareImage = manualImage || defaultImage;
	return (
		<Helmet
			htmlAttributes={{
				lang,
			}}
			title={pageTitle}
			// titleTemplate={defaultTitle ? `%s | ${defaultTitle}` : null}
			meta={[
				{
					name: `description`,
					content: metaDescription,
				},
				{
					property: `og:title`,
					content: title,
				},
				{
					property: `og:description`,
					content: metaDescription,
				},
				{
					property: `og:image`,
					content: `${url}${shareImage}`,
				},
				{
					property: `og:type`,
					content: `website`,
				},
				{
					name: `twitter:card`,
					content: `summary`,
				},
				{
					name: `twitter:title`,
					content: title,
				},
				{
					name: `twitter:description`,
					content: metaDescription,
				},
				{
					property: `twitter:image`,
					content: `${url}${shareImage}`,
				},
			].concat(meta)}
		/>
	);
};

HeadSeo.defaultProps = {
	lang: `en`,
	meta: [],
	description: ``,
};

HeadSeo.propTypes = {
	description: PropTypes.string,
	lang: PropTypes.string,
	meta: PropTypes.arrayOf(PropTypes.object),
	title: PropTypes.string.isRequired,
};

export default HeadSeo;
