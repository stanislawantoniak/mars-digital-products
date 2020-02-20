import React from "react"
import { useStaticQuery, Link, graphql } from "gatsby"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

export default ({ children }) => {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
          }
        }
        allFile {
          edges {
            node {
              id
              absolutePath
              accessTime
              relativePath
              prettySize
              extension
              birthTime(fromNow: true)
      }
    }
  } 
      }`
  )
  return (
    <Layout>
    <SEO title="Home" />
    <h1>Welcome to Mars Digital Product Experience Page2</h1>
    <p>Welcome to your Mars Digital Product Experience Application.</p>
    <p>This website is built using Gatsby, MuleSoft GraphQL Server API.</p>
    <p>Response from GrapQL Server: {data.site.siteMetadata.description}</p>

    <div>
        <h1>My Site's Files</h1>
        <table>
          <thead>
            <tr>
              <th>relativePath</th>
              <th>prettySize</th>
              <th>extension</th>
              <th>birthTime</th>
            </tr>
          </thead>
          <tbody>
            {data.allFile.edges.map(({ node }, index) => (
              <tr key={index}>
                <td>{node.relativePath}</td>
                <td>{node.prettySize}</td>
                <td>{node.extension}</td>
                <td>{node.birthTime}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
  )
}