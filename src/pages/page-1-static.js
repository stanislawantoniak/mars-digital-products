import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Layout from "../components/layout"

import productRenderer from '../components/renderer'

export default () => {
	
	const data = useStaticQuery(
		graphql`
		      query {
		        productApi {
		          product(id:"1002") {
		        	id
		          	SAPProductTitle
		          	retailPrice
					brand
		         	digitalAssets {
		         	   	URL
		           	   	name        
		    	    }
		          }
  			    }
        
			  }`)

	return (
		<Layout activeItem='1' title="Static Data">
		
			<h2>Static Query Example</h2>
			<p>This page displays static product data that was pulled during deployment of this site. Data comes from a GraphQL API built on Mulesoft Platform which is pulling data from Salsify API.</p>
			<hr/>
			{ productRenderer(data.productApi)}
			
		</Layout>

	)
}