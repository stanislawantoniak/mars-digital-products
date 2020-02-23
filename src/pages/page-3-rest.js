import React from "react"
import PageGeneric from '../components/page-generic'
import { withApollo } from 'react-apollo'
import Layout from "../components/layout"
import SEO from "../components/seo"
import productRenderer from './renderer'

class Page3 extends PageGeneric {

	constructor(props) {
		super(props);
	}

	_executeSearch = async () => {

		const { id } = this.state;

		const salsifyUrl = 'https://dev.api.effem.com/salsify-product-proxy-poc/product/' + id;

		console.log("Salsify URL", salsifyUrl);
		const fetchResult = await fetch(salsifyUrl, {
			method: 'get'
		}).then((response) => {
			console.log("Raw response from " + salsifyUrl, response)
			return response.text();
		}).then((responseBody) => {
			try {
				const jsonResponse = JSON.parse(responseBody);
				console.log("Json response from " + salsifyUrl, jsonResponse)

				return jsonResponse;

			} catch (error) {

				console.log("Error response from " + salsifyUrl, error)
				return responseBody;

			}
		});

		const productNormalized = this.productReducer(fetchResult);
		console.log("Normalized response from " + salsifyUrl, productNormalized)
		this.setState({ filterData: productNormalized });

	}

	productReducer(product) {

		return {
			product: {
				id: product["salsify:id"] || 0,
				systemId: product["salsify:system_id"],
				name: product["Product name"],
				brand: product.Brand,
				description: product.Descriptions,
				SAPProductTitle: product['SAP Product Title'],
				retailPrice: product['Retail Price'],
				digitalAssets: product['salsify:digital_assets'] == null ? [] : product['salsify:digital_assets'].map(asset => this.assetReducer(asset))
			}
		};
	}

	assetReducer(asset) {
		return asset == null
			? null
			: {
				id: asset['salsify:id'] || 0,
				URL: asset['salsify:url'],
				name: asset['salsify:name'],
				format: asset['salsify:format'],
				bytes: asset['salsify:bytes'],
				status: asset['salsify:status']
			};
	}

	render() {
		return (
			<Layout activeItem='3'>
				<SEO title="Rest" />

				<h2>This is dynamic GraphQL API demo. </h2>
				<h3>Enter product code and hit Display Product. Use (use codes 1001..1055)</h3>

				<label>Enter Product Code</label>
				<div>
					<input type="text" name="searchText" onChange={this.handleChange} />
					<button class='myButton' onClick={() => this._executeSearch()}>Display Product</button>
				</div>
				<br />
				<hr />

				{productRenderer(this.state.filterData)}

			</Layout>
		)
	}

}
export default withApollo(Page3)
