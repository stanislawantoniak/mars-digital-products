import { Link } from "gatsby"
//import PropTypes from "prop-types"
import React from "react"

const Navi = () => (

	<div>
		<Link to="/page-2-static/" className="myButton">Static Graph QL Example</Link>
		<Link to="/page-1-gql/" className="myButton">Dynamic Graph QL Example</Link>
		<Link to="/page-3-rest/" className="myButton">Normal Rest Example</Link>
	</div>
)
export default Navi
