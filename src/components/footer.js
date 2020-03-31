/** @jsx jsx */
import { BaseStyles, Flex, Text, jsx } from "theme-ui"

const year = new Date().getFullYear()

const Footer = () => {
  return (
    <Flex as="footer" variant="footer" sx={{ justifyContent: "center" }}>
      <BaseStyles>
        <Text as="p" p={3}>
          Copyright &copy; <a href="https://www.alilynne.com">alilynne</a>{" "}
          {year}
        </Text>
      </BaseStyles>
    </Flex>
  )
}

export default Footer
