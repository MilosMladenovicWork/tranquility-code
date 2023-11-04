/* eslint-disable max-len */
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
          <meta name="keywords" content="applications, apps, backend, backends, contact, craft, crafted, crafting, custom, database, development, excellence, experience, expertise, expressjs, fast, fullstack, gatsby, integrate, integrations, needs, nestjs, nodejs, performance, postgresql, project, react, reliable, scalable, seamlesly, security, services, solutions, tailored, team, tranquility, tranquilitycode, unique" />
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
