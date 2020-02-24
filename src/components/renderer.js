import React from "react"

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
							<div>
								{data.product.digitalAssets.map((index) => (
									<div class='imgContainer'>
										<div>{index.name}</div>
										<div>
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
										</div>
										<hr />
									</div>
								))
								}
							</div>
						</div>

					</div>
					: 'Enter valid produt code and hit button to see product'}
				<div class="loader">&nbsp;</div>
			</div>

		)
	}

}

const productRenderer = new Renderer().productSection;

export default productRenderer;
