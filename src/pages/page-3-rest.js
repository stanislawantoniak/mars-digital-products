import React from "react"
import PageGeneric from '../components/page-generic'
import { withApollo } from 'react-apollo'
import Error from '../components/error'
import Layout from "../components/layout"
import productRenderer from '../components/renderer'

class Page3 extends PageGeneric {

	constructor(props) {
		super(props);
	}

	_executeSearch = async () => {

		const { id } = this.state;

		this.setState({
			loading: true,
			filterData: {},
			error: false,
			originalData: ''
		});

		const salsifyUrl = 'https://dev.api.effem.com/salsify-product-proxy-poc/product/' + id;

		console.log("Salsify URL", salsifyUrl);
		await fetch(salsifyUrl, {
			method: 'get'
		}).then((response) => {
			console.log("Raw response from " + salsifyUrl, response)
			return response.text();
		}).then((responseBody) => {
			try {
				const jsonResponse = JSON.parse(responseBody);
				console.log("Json response from " + salsifyUrl, jsonResponse)

				const productNormalized = this.productReducer(jsonResponse);
				console.log("Normalized response from " + salsifyUrl, productNormalized)
				this.setState({
					originalData: jsonResponse,
					filterData: productNormalized,
					loading: false
				});
				return productNormalized;

			} catch (error) {

				this.setState({
					loading: false,
					error: true
				});
				console.log("Error response from " + salsifyUrl, error)
				return responseBody;

			}
		});

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
		console.log("Data from Back end - datarenderer", original);
		const dataSize = ( this.state.originalData ? JSON.stringify(this.state.originalData).length : 0);
		console.log("Data size", dataSize);
		
		return (
			<Layout activeItem='3' title="Rest">

				<h2>This is dynamic REST API example.</h2>
				<p>Data is pulled dynamically from a REST API endpoint built on Mulesoft platform. Mulesoft API is proxying Salsify API and adds headers to be displayed by browser.</p>
				<hr />

				<div>
					<p>Enter product code and hit Display Product. Use codes 1001..1055, 8853301400149, 8853301400166</p>
					<input type="text" name="searchText" onChange={this.handleChange} />
					<button class='myButton' onClick={() => this._executeSearch()}>Display Product</button>
				</div>
				<br />
				<hr />
				<div className={this.state.loading ? 'loaderActive' : 'noClass'}>
					{productRenderer(this.state.filterData)}
					<div className={this.state.dataActive ? 'contenton' : 'contentoff'}>
						<div>
							{dataSize > 1 ?
								<div class="originaldata">
									<button type="button" onClick={this.toggleDataActive} class="collapsible">Size of product data transmitted {dataSize}. Click to view data.</button>
									<div class="content">
										<p>{JSON.stringify(this.state.originalData)}</p>
									</div>
								</div>
								: <div />
							}
						</div>
					</div>
					{this.state.error ? <Error id={this.state.id} /> : null}
				</div>

			</Layout>
		)
	}

}
export default withApollo(Page3)
