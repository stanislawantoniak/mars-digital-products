import React from "react"
import { Link } from "gatsby"

class Renderer {

	productSection(data) {
		console.log("Data from Back end - renderer", data.product)
		return (
			<div>
				<h3>Product Details.</h3>
				{data.product ?
					<div>
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
						<div>
							<h3>Digital Assets</h3>
							<table>
								<thead>
									<tr>
										<th>Name</th>
										<th>Video</th>
									</tr>
								</thead>
								<tbody>

								</tbody>
								{data.product ?
									<tbody id={data.product.systemId}>
										{data.product.digitalAssets.map((index) => (
											<tr key={index}>
												<td>{index.name}</td>
												<td>
													{!index.URL.endsWith('jpg') ?
														<iframe
															src={index.URL.replace('http', 'https')}
															title="Salsify Viedo"
															allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
															frameBorder="5"
															width="500"
															height="500"
															webkitallowfullscreen="false"
															mozallowfullscreen="false"

														/>
														: <img src={index.URL.replace('http', 'https')}></img>
													}
												</td>
											</tr>
										))}
									</tbody>
									: null}
							</table>
						</div>

					</div>
					: 'Enter valid produt code and hit enter to see product'}
			</div>

		)
	}

}

const productRenderer = new Renderer().productSection;

export default productRenderer;
