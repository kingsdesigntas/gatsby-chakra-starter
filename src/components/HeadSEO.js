import * as React from "react";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";

const HeadSeo = ({ description, lang, meta, title, image }) => {
	const { site } = useStaticQuery(
		graphql`
			query {
				site {
					siteMetadata {
						title
						description
						siteUrl
						image
					}
				}
			}
		`
	);

	const metaDescription = description || site.siteMetadata.description;
	const defaultTitle = site.siteMetadata?.title;
	const url = site.siteMetadata.siteUrl;
	const defaultImage = `${url}${site.siteMetadata.image}`;
	let pageImage = "";
	if (image) {
		pageImage = `${url}${image}`;
	}

	return (
		<Helmet
			htmlAttributes={{
				lang,
			}}
			title={title}
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
					content: pageImage || defaultImage,
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
					content: pageImage || defaultImage,
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
