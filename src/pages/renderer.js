import { Link } from "gatsby"

class Renderer {

	produceProductSection(data) {
		console.log("Data from Back end", data.product)
		return (
			<div>
				<table>
					<thead>
						<tr>
							<th>ProductId</th>
							<th>SystemId</th>
							<th>SAPProductTitle</th>
							<th>Retail Price</th>
						</tr>
					</thead>
					<tbody>
						{data.product ?
							<tr key={data.product.id}>
								<td>{data.product.id}</td>
								<td>{data.product.systemId}</td>
								<td>{data.product.SAPProductTitle}</td>
								<td>{data.product.retailPrice}</td>
							</tr>
							: <tr><td>"Product details Not Found"</td></tr>}
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
											{!index.url.endsWith('jpg') ?
												<iframe
													src={index.url.replace('http', 'https')}
													title="Salsify Viedo"
													allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
													frameBorder="5"
													width="500"
													height="500"
													webkitallowfullscreen="false"
													mozallowfullscreen="false"

												/>
												: <img src={index.url.replace('http', 'https')}></img>
											}
										</td>
									</tr>
								))}
							</tbody>
							: null}
					</table>
				</div>
				<table>
					<tr>
						<td><Link to="/page-2-static/">Static Graph QL Example</Link></td>
						<td><Link to="/page-1-gql/">Dynamic Graph QL Example</Link></td>
						<td><Link to="/page-5-rest/">Normal Rest Example</Link></td>
					</tr>
				</table>
			</div>
		)
	}

}

export default Renderer
