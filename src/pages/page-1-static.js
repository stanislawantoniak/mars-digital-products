import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Layout from "../components/layout"

import productRenderer from './renderer'

export default () => {
	
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
		<Layout activeItem='1' title="Static Data">
		
			<h2>Static Query Example</h2>
			<p>This page displays static product data that was pulled during deployment of this site.</p>
			<hr/>
			{ productRenderer(data.productApi)}
			
		</Layout>

	)
}