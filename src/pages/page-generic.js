import React, { Component } from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import productRenderer from './renderer'

class PageGeneric extends Component {

	state = {
		id: '',
		filterData: [],
		pageId: '',
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
		console.log('page-generic - render() - page id:', this.state.pageId);
		return (
			<Layout siteItem={this.state.pageId}>
				<SEO title="Home" />
				
				<h2>This is dynamic GraphQL API demo. </h2>
				<h3>Enter product code and hit Search Product. Use (use codes 1001..1055)</h3>
				
				<label>Enter Product ID </label>
				<div>
					<input type="text" name="searchText" onChange={this.handleChange} />
				<button onClick={() => this._executeSearch()}>Search Product</button>
				</div>
				<br />
				<hr />

				{productRenderer(this.state.filterData)}

			</Layout>
		)
	}

	//empty search
	_executeSearch = async () => { }

}

export default PageGeneric
