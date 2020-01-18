import React from "react"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
// import { css } from "@emotion/core"
import Layout from "../components/layout/layout"
import Container from "../components/layout/container"
import SEO from "../components/seo"

export const query = graphql`
  query($slug: String!) {
    mdx(frontmatter: { slug: { eq: $slug } }) {
      frontmatter {
        title
        description
      }
      body
    }
  }
`

const PostTemplate = ({ data: { mdx: post } }) => (
  <Layout isProject={true}>
    <SEO
      title={post.frontmatter.title}
      lang="ru"
      description={post.frontmatter.description}
    />
    <Container>
      <h1>{post.frontmatter.title}</h1>
      {/* <p
        css={css`
          font-size: 0.75rem;
        `}
      ></p> */}
    </Container>

    <Container>
      <MDXRenderer>{post.body}</MDXRenderer>
    </Container>
  </Layout>
)

export default PostTemplate
