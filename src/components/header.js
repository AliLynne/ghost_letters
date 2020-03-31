/** @jsx jsx */
import { graphql, useStaticQuery } from "gatsby"
import { Flex, Heading, Button, jsx, useColorMode, Divider } from "theme-ui"
import Link from "./link"
import PageList from "./pageList"

const Header = () => {
  const [colorMode, setColorMode] = useColorMode()
  const data = useStaticQuery(graphql`
    query headerQuery {
      allGhostSettings {
        edges {
          node {
            id
            title
            description
          }
        }
      }
    }
  `)
  const settings = data.allGhostSettings.edges[0].node
  return (
    <Flex
      as="header"
      sx={{
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
      }}
    >
      <Button
        variant="toggle"
        onClick={() =>
          setColorMode(colorMode === "default" ? "dark" : "default")
        }
      >
        {colorMode === "default" ? "Dark" : "Light"}
      </Button>
      <Link to="/">
        <Heading as="h1" pb={4}>
          {settings.title}
        </Heading>

        <Divider />
        <Heading p={2}>{settings.description}</Heading>
        <Divider />
      </Link>
      <Flex as="nav">
        <PageList />
      </Flex>
    </Flex>
  )
}

export default Header
