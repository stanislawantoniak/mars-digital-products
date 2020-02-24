import React from "react"
import PageGeneric from '../components/page-generic'
import gql from 'graphql-tag';
import { withApollo } from 'react-apollo'
import Layout from "../components/layout"
import productRenderer from '../components/renderer'

class Page2 extends PageGeneric {

	constructor(props) {
		super(props);
	}

	gqlResult = { loading: false };

	_executeSearch = async () => {

		console.log("page-2 id", id);
		console.log("page-2 FEED_SEARCH_QUERY", FEED_SEARCH_QUERY);

		const { id } = this.state;
		this.setState({ loading: true });
		this.setState({ filterData: {} });

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


		try {
			
			this.qglResult = this.props.client.query({
				query: FEED_SEARCH_QUERY,
				variables: { id },
			})
			this.setState({ filterData: this.qglResult.data });
			this.setState({ loading: false });
		}  catch (error) {
				
				this.setState({ loading: false });
				console.log("Error response from " + salsifyUrl, error)
				return responseBody;
			}

	}

	render() {
		return (
			<Layout activeItem='2' title="Dynamic GQL">

				<h2>This is dynamic GraphQL API demo. </h2>
				<p>Enter product code and hit Display Product. Use (use codes 1001..1055)</p>
				<hr />
				<div>
					<input type="text" name="searchText" onChange={this.handleChange} />
					<button class='myButton' onClick={() => this._executeSearch()}>Display Product</button>
				</div>
				<br />
				<hr />
				<div className={this.state.loading ? 'loaderActive' : 'noClass'}>
					{productRenderer(this.state.filterData)}
				</div>
			</Layout>
		)
	}

}

export default withApollo(Page2)
