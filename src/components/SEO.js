import { StaticQuery, graphql } from 'gatsby';
import React from 'react';
import Helmet from 'react-helmet';
import favicon from '../../static/images/logo/logo-mobile.svg';

const SEO = props => (
  <StaticQuery
    query={detailsQuery}
    render={data => {
      const title = props.title || data.site.siteMetadata.title;
      return (
        <Helmet
          htmlAttributes={{
            lang: 'en'
          }}
          title={title}
          titleTemplate={props.title ? `%s` : `%s - ${data.site.siteMetadata.title}`}
          link={[
            { rel: 'shortcut icon', type: 'image/svg', href: `${favicon}` }
          ]}
        >
          {props.description && <meta name="description" content={props.description} />}
        </Helmet>
      );
    }}
  />
);

SEO.defaultProps = {
  lang: 'en',
  meta: [],
  keywords: []
};

export default SEO;

const detailsQuery = graphql`
  query DefaultSEOQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
