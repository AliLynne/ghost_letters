/** @jsx jsx */
import { graphql, useStaticQuery } from "gatsby"
import { Flex, Heading, jsx, BaseStyles } from "theme-ui"

import Post from "../components/post"

const PostList = () => {
  const data = useStaticQuery(graphql`
    query postsQuery {
      allGhostPost {
        edges {
          node {
            uuid
            title
            slug
            excerpt
            custom_excerpt
            codeinjection_head
          }
        }
      }
    }
  `)
  const posts = data.allGhostPost.edges
  return (
    <Flex sx={{ flexDirection: "column", alignItems: "center", pt: 4 }}>
      <Heading as="h3" color="primary" sx={{ fontSize: 5 }}>
        Recent Letters
      </Heading>
      <Flex
        as="ul"
        sx={{
          my: 3,
          p: 0,
          flexWrap: "wrap",
          justifyContent: "space-around",
          alignItems: "space-between",
        }}
      >
        <BaseStyles>
          {posts.map(post => {
            post = post.node

            return <Post post={post} key={post.uuid} />
          })}
        </BaseStyles>
      </Flex>
    </Flex>
  )
}

export default PostList
