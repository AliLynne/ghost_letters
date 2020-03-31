/** @jsx jsx */
import { BaseStyles, Heading, Text, jsx } from "theme-ui"
import { Link } from "gatsby"

const truncate = (string, length, ending) => {
  if (length == null) {
    length = 75
  }
  if (ending == null) {
    ending = "..."
  }
  if (string.length > length) {
    console.log(length)
    return string.substring(0, length) + ending
  }
}

const Post = ({ post }) => {
  const slug = `/${post.slug}`
  return (
    <BaseStyles as="li">
      <Link to={slug} key={post.uuid} variant="card">
        <Heading as="h3" py={2}>
          {post.title}
        </Heading>

        <Text variant="typewriter" py={2}>
          {truncate(post.excerpt)}
        </Text>
      </Link>
    </BaseStyles>
  )
}

export default Post
