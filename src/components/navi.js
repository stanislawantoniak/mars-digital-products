import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Navi = () => (
	<div class="nav">
		<nav>
			<ul>
				<li>
					<Link to="/" className="active">Home</Link>
				</li>
				<li>
					<Link to="/page-1-static/">Static Graph QL Example</Link>
				</li>
				<li>
					<Link to="/page-2-gql/">Dynamic Graph QL Example</Link>
				</li>
				<li>
					<Link to="/page-3-rest/">Normal Rest Example</Link>
				</li>
				<li class="slider"></li>
			</ul>
		</nav>
	</div>
)

Navi.propTypes = {
	activeItem: PropTypes.string,
}

Navi.defaultProps = {
	activeItem: `home`,
}

export default Navi
