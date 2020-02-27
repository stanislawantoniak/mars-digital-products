import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (

	<Layout activeItem='0'>
		<SEO title="Home" />
		<h2>Welcome to Mars Digital World</h2>
		<p>Welcome to your Mars Digital Product Experience Application.</p>
		<p>This website is built using Gatsby framework based on NodeJs and is pulling data from various sources: MuleSoft GraphQL enabled API, Apollo GraphQL API based on NodeJs, Rest API. Product data comes originally from Salsify (via Salsify API).</p>
		<p>Select one of the options from menu bar to see how product data is rendered.</p>

	</Layout>
)

export default IndexPage
