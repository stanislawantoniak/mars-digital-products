import PageGeneric from './page-generic'
import { withApollo } from 'react-apollo'


class Page5 extends PageGeneric {

	_executeSearch = () => {

		const { id } = this.state;
		let currentComponent = this;

		try {
			const salsifyUrl = 'https://dev.api.effem.com/salsify-product-proxy-poc/product/' + id;

			console.log("Salsify URL", salsifyUrl);
			return fetch(salsifyUrl, {
				method: 'get'
			}).then((response) => {
				console.log("Response from End point1", response)
				return response.text();
			}).then((responseBody) => {
				try {
					const jsonResponse = JSON.parse(responseBody);
					console.log("Response from End point2", jsonResponse)
					currentComponent.setState({ salsifyResponse: jsonResponse })
					return this.productReducer(jsonResponse);

				} catch (error) {

					console.log("Response from End point3", error)
					return responseBody;

				}
			});

		}
		catch (error) {
			console.log("Error********", error);
		}


	}

	productReducer(product) {

		return {
			id: product["salsify:id"] || 0,
			systemId: product["salsify:system_id"],
			name: product["Product name"],
			brand: product.Brand,
			description: product.Descriptions,
			SAPProductTitle: product['SAP Product Title'],
			cost: product.cost,
			retailPrice: product['Retail Price'],
			mainImage: this.assetReducer(this.getImageFromAssets(product['salsify:digital_assets'], product['Main Image (Front)'])),
			backImage: this.assetReducer(this.getImageFromAssets(product['salsify:digital_assets'], product['Back Image'])),
			digitalAssets: product['salsify:digital_assets'] == null ? [] : product['salsify:digital_assets'].map(asset => this.assetReducer(asset))
		};
	}

	assetReducer(asset) {
		return asset == null
			? null
			: {
				id: asset['salsify:id'] || 0,
				url: asset['salsify:url'],
				name: asset['salsify:name'],
				format: asset['salsify:format'],
				bytes: asset['salsify:bytes'],
				status: asset['salsify:status']
			};
	}

	getImageFromAssets(assetArray, id) {
		const asset = (assetArray == null || id == null
			? null
			: assetArray.find(this.checkId, id));

		return asset;

	}

	checkId(item) {
		console.log('this in checkId: ' + this);
		return item == null
			? false
			: item['salsify:id'] == this
	}

}
export default withApollo(Page5)
