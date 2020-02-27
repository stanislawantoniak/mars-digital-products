import { Component } from "react"

class PageGeneric extends Component {

	state = {
		id: '',
		filterData: {},
		originalData: {},
		dataActive: true,
		loading: false,
		error: false,
	}

	toggleDataActive(){
		( this.state.dataActive == true? this.setState({ dataActive: false }) : this.setState({ dataActive: false }) );
		
		console.log('Toggle active to',this.state.dataActive);
		
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
