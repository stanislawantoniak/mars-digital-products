import { Component } from "react"

class PageGeneric extends Component {

	state = {
		id: '',
		filterData: [],
		loading: false,
	}

	constructor(props) {
		super(props);
		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(event) {
		this.setState({ id: event.target.value });
		console.log("user Input", event.target.value);
	}

}

export default PageGeneric
