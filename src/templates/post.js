import React from "react"
import { graphql } from "gatsby"
import { Container, BaseStyles } from "theme-ui"
import Layout from "./layout"

const Post = ({ data }) => {
  const post = data.ghostPost
  return (
    <Layout>
      <Container variant="card">
        <h1>{post.title}</h1>
        <Container variant="letter">
          <BaseStyles dangerouslySetInnerHTML={{ __html: post.html }} />
        </Container>
      </Container>
    </Layout>
  )
}
export default Post
export const postQuery = graphql`
  query($slug: String!) {
    ghostPost(slug: { eq: $slug }) {
      title
      slug
      feature_image
      html
      codeinjection_head
    }
  }
`
