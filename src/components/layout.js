/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Header from "./header"
import SEO from "../components/seo"
import "./layout.css"

const Layout = ({ children, activeItem, title }) => {
	const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title          
        }
      }
    }
  `)
	console.log('Layout - page id:', activeItem);
	return (
		<>
			<Header siteTitle={data.site.siteMetadata.title} activeItem={activeItem} />
			<div
				style={{
					margin: `0 auto`,
					maxWidth: 960,
					padding: `0px 1.0875rem 1.45rem`,
					paddingTop: 0,
				}}
			>
				<SEO title={title} />
				<main>{children}</main>
				<footer>
					© {new Date().getFullYear()}, Built with
          {` `}
					<a href="https://www.gatsbyjs.org">Gatsby</a>
				</footer>
			</div>
		</>
	)
}

Layout.propTypes = {
	children: PropTypes.node.isRequired,
	activeItem: PropTypes.string,
	title: PropTypes.string,
}

Layout.defaultProps = {
	activeItem: `0`,
	title: 'Home',
}

export default Layout
