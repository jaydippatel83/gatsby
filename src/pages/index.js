import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import styled from 'styled-components';

import SEO from "../components/seo"
import { Link } from "@reach/router";


const BlogLink = styled(Link)`
  text-decoration:none;
`
const BlogTitle = styled.h3`
  margin-bottom:20px;
  color:dodgerblue;
`

export default ({ data }) => {
  console.log(data);

  return (
    <Layout>
      <SEO title="Home" />
      <div>
        <h1>Jaydip's Thoughts</h1>
        <h4>{data.allMarkdownRemark.totalCount}</h4>
        {
          data.allMarkdownRemark.edges.map(({ node }) => (
            <div key={node.id}>
              <BlogLink to={node.fields.slug}>
              <BlogTitle>{node.frontmatter.title} - {node.frontmatter.date}</BlogTitle>
              </BlogLink>
              <p>{node.excerpt}</p>
            </div>
          ))
        }
      </div>

    </Layout>
  )
}

export const query = graphql`
  query{
    allMarkdownRemark(sort:{fields:[frontmatter___date],order:DESC}) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            description
            title
            date
          }
          fields{
            slug
          }
          excerpt
        }
      }
    }
  }
  
`
