import { Link } from "gatsby"
//import PropTypes from "prop-types"
import React from "react"

const Navi = () => (
	<div>
		<nav>
			<a>
				<Link to="/">Home</Link>
			</a>
			<a>
				<Link to="/page-2-static/">Static Graph QL Example</Link>
			</a>
			<a>
				<Link to="/page-1-gql/">Dynamic Graph QL Example</Link>
			</a>
			<a>
				<Link to="/page-3-rest/">Normal Rest Example</Link>
			</a>
		</nav>

		<div>
			<Link to="/page-2-static/" className="myButton">Static Graph QL Example</Link>
			<Link to="/page-1-gql/" className="myButton">Dynamic Graph QL Example</Link>
			<Link to="/page-3-rest/" className="myButton">Normal Rest Example</Link>
		</div>
	</div>
)
export default Navi