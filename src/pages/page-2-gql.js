import React from "react"
import PageGeneric from '../components/page-generic'
import gql from 'graphql-tag';
import { withApollo } from 'react-apollo'
import Layout from "../components/layout"
import productRenderer from '../components/renderer'
import Error from '../components/error'

class Page2 extends PageGeneric {

	constructor(props) {
		super(props);
	}

	_executeSearch = async () => {

		console.log("page-2 id", id);

		const { id } = this.state;
		this.setState({
			loading: true,
			filterData: {},
			error: false
		});

		const result = await this.getQ(id);

		this.setState({
			filterData: result.data,
			loading: false,
			originalData: result.data
		});
		const dataSize = (this.state.originalData ? JSON.stringify(this.state.originalData).length : 0);
		console.log("Data size", dataSize);

	}

	getQ = async (id) => {

		const FEED_SEARCH_QUERY = gql`
			 query {
			    product(id:${id}) {
			   		id
			    	name
			    	retailPrice
					brand
			    	SAPProductTitle
			    	digitalAssets {
			    	  URL
			     	  name
			    	}
			  	}  
			  }`
		console.log("page-2 FEED_SEARCH_QUERY", FEED_SEARCH_QUERY);

		try {
			return await this.props.client.query({
				query: FEED_SEARCH_QUERY,
				variables: { id },
			})
		} catch {
			console.log('catch');
			this.setState({ error: true });
		} finally {
			console.log('finally');
		}

		return { data: { product: false } };

	}

	render() {

		return (
			<Layout activeItem='2' title="Dynamic GQL">

				<h2>This is dynamic GraphQL API example. </h2>
				<p>Data is pulled from a GQL API built with Javascript technology - NodeJS framework/Apollo server. The API is pulling data from Salsify API.</p>
				<hr />
				<div>
					<p>Enter product code and hit Display Product. Use codes 1001..1055, 8853301400149, 8853301400166</p>
					<input type="text" name="searchText" onChange={this.handleChange} />
					<button class='myButton' onClick={() => this._executeSearch()}>Display Product</button>
				</div>
				<br />
				<hr />
				<div className={this.state.dataActive ? 'contenton' : 'contentoff'}>
					<div>
						{JSON.stringify(this.state.filterData).length > 2 ?
							<div class="originaldata">
								<button type="button" onClick={() => this.toggleDataActive()} class="collapsible">Size of product data transmitted {JSON.stringify(this.state.originalData).length}. Click to view raw data.</button>
								<div class="content">
									<textarea readonly cols="90" rows="25">{JSON.stringify(this.state.originalData, null, 3)}</textarea>
								</div>
							</div>
							: <div />
						}
					</div>
				</div>

				<div className={this.state.loading ? 'loaderActive' : 'noClass'}>
					{productRenderer(this.state.filterData)}
					{this.state.error ? <Error id={this.state.id} /> : null}
				</div>
			</Layout>
		)
	}

}

export default withApollo(Page2)
