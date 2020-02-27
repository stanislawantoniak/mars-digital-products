import React from "react"

class Renderer {

	loader() { return (<div class="loader">&nbsp;</div>) };

	productDetails(data) {
		return (
			<div>
				<h3>Product Details.</h3>
				<table>
					<thead>
						<tr>
							<th>Id</th>
							<th>SAP Product Title</th>
							<th>Brand</th>
							<th>Retail Price</th>
						</tr>
					</thead>
					<tbody>

						<tr key={data.product.id}>
							<td>{data.product.id}</td>
							<td>{data.product.SAPProductTitle}</td>
							<td>{data.product.brand}</td>
							<td>{data.product.retailPrice}</td>
						</tr>

					</tbody>
				</table>
			</div>
		)
	}

	productAssets(data) {
		return (
			<div>
				<h3>Digital Assets</h3>
				<div>
					{data.product.digitalAssets.map((asset) => (
						<div class='imgContainer'>
							<div>{asset.name}</div>
							<div>
								{!asset.URL.endsWith('jpg') ?
									<iframe
										src={asset.URL.replace('http', 'https')}
										title="Salsify Viedo"
										allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
										frameBorder="5"
										width="500"
										height="500"
										webkitallowfullscreen="false"
										mozallowfullscreen="false"

									/>
									: <img src={asset.URL.replace('http', 'https')}></img>
								}
							</div>
							<hr />
						</div>
					))
					}
				</div>
			</div>
		)
	}
	
	

	product(data) {
		return (
			<div>
				{this.productDetails(data)}
				{this.productAssets(data)}
			</div>
		)
	}

	productSection(data) {
		console.log("Data from Back end - renderer", data.product);
		return (
			<div>

				{data.product ?
					this.product(data)
					: 'Enter valid product code and hit button to see product'}
				{ this.loader()}
			</div>
		)
	}

}

const productRenderer = new Renderer().productSection;

export default productRenderer;
