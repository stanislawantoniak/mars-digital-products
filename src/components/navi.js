import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Navi = () => (
	<div class="nav">
		<nav>
			<ul>
				<li>
					<a class="active">
						<Link to="/">Home</Link>
					</a>
				</li>
				<li>
					<a>
						<Link to="/page-2-static/">Static Graph QL Example</Link>
					</a>
				</li>
				<li>
					<a>
						<Link to="/page-1-gql/">Dynamic Graph QL Example</Link>
					</a>
				</li>
				<li>
					<a>
						<Link to="/page-3-rest/">Normal Rest Example</Link>
					</a>
				</li>
				<li class="slider"></li>
			</ul>
		</nav>
	</div>
)

Header.propTypes = {
	activeItem: PropTypes.string,
}

Header.defaultProps = {
	activeItem: `home`,
}

export default Navi
