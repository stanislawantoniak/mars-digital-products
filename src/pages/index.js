import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  
  <Layout>
    <SEO title="Home" />
    <h1>Welcome to Mars Digital World</h1>
    <p>Welcome to your Mars Digital Product Experience Application.</p>
    <p>This website is built using Gatsby, MuleSoft GraphQL enabled API.</p>

    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>

	<div>	
    	<Link to="/page-2-static/" class="myButton">Static Graph QL Example</Link>
    	<Link to="/page-1-gql/" class="myButton">Dynamic Graph QL Example</Link>
    	<Link to="/page-3-rest/" class="myButton">Normal Rest Example</Link>
	</div>
	
  </Layout>
)

export default IndexPage
