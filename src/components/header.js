import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
	<header
		style={{
			background: `rebeccapurple`
		}}
	>
		<div
			style={{
				margin: `0 auto`,
				maxWidth: 960,
				padding: `1.45rem 1.0875rem`,
			}}
		>
			<h1 style={{ margin: 0 }}>
				<Link
					to="/"
					style={{
						color: `white`,
						textDecoration: `none`,
					}}
				>
					{siteTitle}
				</Link>
			</h1>
		</div>

		<div><a class='divider'/></div>

		<nav class='nav' style={{
				margin: `0 auto`,
				maxWidth: 960,
			}}>
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

	</header>
	
)

Header.propTypes = {
	siteTitle: PropTypes.string,
}

Header.defaultProps = {
	siteTitle: ``,
}

export default Header
