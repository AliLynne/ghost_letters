/** @jsx jsx */
import { Container, Flex, jsx } from "theme-ui"
import Header from "../components/header"
import Footer from "../components/footer"

const Layout = ({ children }) => {
  return (
    <Flex sx={{ flexDirection: "column", p: 2 }}>
      <Header />
      <Container as="main" sx={{ minHeight: "80vh" }}>
        {children}
      </Container>
      <Footer />
    </Flex>
  )
}

export default Layout
