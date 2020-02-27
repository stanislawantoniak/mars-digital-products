import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle, activeItem }) => (
	<header>
		<div>
			<h1>
				<Link to="/">
					{siteTitle}
				</Link>
			</h1>
		</div>

		<nav>
			<ul>
				<li>
					<Link to="/" className={ activeItem == '0' ? 'active' : 'not-active'}>Home</Link>
				</li>
				<li>
					<Link to="/page-1-static/" className={ activeItem == '1' ? 'active' : 'not-active'}>Static Graph QL</Link>
				</li>
				<li>
					<Link to="/page-2-gql/" className={ activeItem == '2' ? 'active' : 'not-active'}>Dynamic Graph QL</Link>
				</li>
				<li>
					<Link to="/page-3-rest/" className={ activeItem == '3' ? 'active' : 'not-active'}>Normal Rest</Link>
				</li>
				<li class="slider"></li>
			</ul>
		</nav>

	</header>
	
)

Header.propTypes = {
	siteTitle: PropTypes.string,
	activeItem: PropTypes.string,
}

Header.defaultProps = {
	siteTitle: ``,
	activeItem: `0`,
}

export default Header
