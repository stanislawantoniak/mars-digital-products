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
    	<button to="/page-2-static/">Static Graph QL Example</button>
    	<button to="/page-1-gql/">Dynamic Graph QL Example</button>
    	<button to="/page-3-rest/">Normal Rest Example</button>
	</div>
	
    <table>
      <tr>
        <td>
    <Link to="/page-2-static/" className="button">Static Graph QL Example</Link></td>
    <td><Link to="/page-1-gql/" className="button">Dynamic Graph QL Example</Link></td>
    <td><Link to="/page-3-rest/" className="button">Normal Rest Example</Link></td>
    </tr>
    </table>
  </Layout>
)

export default IndexPage
