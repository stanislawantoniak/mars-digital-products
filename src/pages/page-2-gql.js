import React from "react"
import PageGeneric from '../components/page-generic'
import gql from 'graphql-tag';
import { withApollo } from 'react-apollo'
import Layout from "../components/layout"
import SEO from "../components/seo"
import productRenderer from './renderer'

class Page2 extends PageGeneric {

	constructor(props) {
		super(props);
	}

	_executeSearch = async () => {
		
		const { id } = this.state;
		const FEED_SEARCH_QUERY = gql`
			 query {
			    product(id:${id}) {
			   		id
					systemId
			    	name
			    	retailPrice
					brand
					description
			    	SAPProductTitle
			    	digitalAssets {
			    	  URL
			     	  name
			    	}
			  	}  
			  }`

		console.log("page-4 id", id);
		console.log("page-4 FEED_SEARCH_QUERY", FEED_SEARCH_QUERY);

		const result = await this.props.client.query({
			query: FEED_SEARCH_QUERY,
			variables: { id },
		})
		const links = result.data;
		console.log("Data::: ", links);

		this.setState({ filterData: links });

	}
	
	render() {
		return (
			<Layout activeItem='2'>
				<SEO title="Home" />

				<h2>This is dynamic GraphQL API demo. </h2>
				<h3>Enter product code and hit Search Product. Use (use codes 1001..1055)</h3>

				<label>Enter Product Code</label>
				<div>
					<input type="text" name="searchText" onChange={this.handleChange} />
					<button class='myButton' onClick={() => this._executeSearch()}>Search Product</button>
				</div>
				<br />
				<hr />

				{productRenderer(this.state.filterData)}

			</Layout>
		)
	}

}

export default withApollo(Page2)
