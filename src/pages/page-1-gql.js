import React, { Component } from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import gql from 'graphql-tag';
import { withApollo } from 'react-apollo'

class Page4 extends Component {

	state = {
		id: '1001',
		filterData: []
	}
	
	constructor(props) {
		super(props);
		this.handleChange = this.handleChange.bind(this);
		this._executeSearch();
	}

	handleChange(event) {
		this.setState({ id: event.target.value });
		console.log("user Input", event.target.value);
	}

	render() {
		const data = this.state.filterData;
		console.log("Data from Back end", data.product)
		return (
			<Layout>
				<SEO title="Home" />
				<h1>Welcome to Mars Digital Product Experience - GraphQL API</h1>

				<label>Enter Product ID </label>
				<input type="text" name="searchText" onChange={this.handleChange} />
				user entered text {this.state.id}
				<h3>Product Details.</h3>
				<button
					onClick={() => this._executeSearch()}
				>
					Search Product
          </button>

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
													src={index.url.replace('http','https')}
													title="Salsify Viedo"
													allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
													frameBorder="5"
													width="500"
													height="500"
													webkitallowfullscreen="false"
													mozallowfullscreen="false"

												/>
												: <img src={index.url.replace('http','https')}></img>
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
						<td>
    <Link to="/page-2-static/">Static Graph QL Example</Link></td>
    <td><Link to="/page-1-gql/">Dynamic Graph QL Example</Link></td>
    <td><Link to="/page-5-rest/">Normal Rest Example</Link></td>
					</tr>
				</table>
			</Layout>
		)
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
    SAPProductTitle
    digitalAssets {
      url
      name
    }
  }  
}`

		try {
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
		catch (error) {
			console.log("Error********", error);
		}

	}

}

export default withApollo(Page4)
