import React, { Component } from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import productRenderer from '../components/renderer'

class PageGeneric extends Component {

	state = {
		id: '',
		filterData: []
	}
	
	constructor(props) {
		super(props);
		this.handleChange = this.handleChange.bind(this);
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
				(use codes 1001..1055)
				<button onClick={() => this._executeSearch()}>
					Search Product
          		</button>
				
				{ productRenderer(this.state.filterData) }

			</Layout>
		)
	}

	//empty search
	_executeSearch = async () => { }

}

export default PageGeneric