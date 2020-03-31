/** @jsx jsx */
import { Link as GatsbyLink } from "gatsby"
import { jsx, BaseStyles } from "theme-ui"

const Link = ({ to, children, as }) => {
  return (
    <BaseStyles>
      <GatsbyLink to={to} sx={{ textDecoration: "none" }} as={as}>
        {children}
      </GatsbyLink>
    </BaseStyles>
  )
}

export default Link
