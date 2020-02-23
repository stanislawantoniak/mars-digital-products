import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Layout from "../components/layout"
import Navi from "../components/navi"
import SEO from "../components/seo"
import productRenderer from './renderer'

export default ({ children }) => {
	
	const data = useStaticQuery(
		graphql`
		      query {
		        productApi {
		          product(id:"1002") {
		     	    systemId
		        	id
		          	SAPProductTitle
		          	retailPrice
					brand
					description
		         	digitalAssets {
		            	id
		         	   	URL
		           	   	status
		           	   	name        
		    	    }
		          }
  			    }
        
			  }`)

	return (
		<Layout>
			<SEO title="Home" />
			
			<h1>Welcome to Mars Digital Product Experience - Static Query Example</h1>
			<p>Welcome to your Mars Digital Product Experience Application.</p>
			<br/>
			<hr/>
			{ productRenderer(data.productApi)}
			
		</Layout>

	)
}