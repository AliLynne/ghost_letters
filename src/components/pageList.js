import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"

// TODO: Need to create pages in GatsbyNode before I can connect the pages to the template (also need to create the page thempate) and the link.

const PageList = () => {
  const data = useStaticQuery(graphql`
    query pagesQuery {
      allGhostPage {
        edges {
          node {
            uuid
            html
            title
          }
        }
      }
    }
  `)
  console.log(data.allGhostPage.edges)
  const pages = data.allGhostPage.edges
  return (
    <ul>
      {pages.map(page => {
        page = page.node
        return <li key={page.uuid}>{page.title}</li>
      })}
    </ul>
  )
}

export default PageList
