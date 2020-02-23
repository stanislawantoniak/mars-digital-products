import React from "react"
import Navi from "../components/navi"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (

	<Layout>
		<SEO title="Home" />
		<h1>Welcome to Mars Digital World</h1>
		<p>Welcome to your Mars Digital Product Experience Application.</p>
		<p>This website is built using Gatsby, MuleSoft GraphQL enabled API.</p>
		<p>Select one of the options below to see how product data is rendered.</p>

		<Navi/>

	</Layout>
		)
		
		export default IndexPage
