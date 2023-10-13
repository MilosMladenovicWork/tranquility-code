import { graphql } from 'gatsby';
import React from 'react';
import Layout from '../components/Layout';
import SEO from '../components/SEO';

const Service = ({ data }) => {
  const { title } = data.markdownRemark.frontmatter;
  const { html, excerpt } = data.markdownRemark;
  return (
    <Layout bodyClass="page-services-single">
      <SEO title={title} description={excerpt}/>
      <div className="container pb-6 pt-6 pt-md-10 pb-md-10">
        <div className="row justify-content-start">
          <div className="col-12 col-md-8">
            <div className="service service-single">
              <h1 className="title">{title}</h1>
              <div className="content" dangerouslySetInnerHTML={{ __html: html }} />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export const query = graphql`
  query($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
      }
      fields {
        slug
      }
      html
      excerpt(pruneLength: 1000)
    }
  }
`;

export default Service;
