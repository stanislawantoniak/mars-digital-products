import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle, activeItem }) => (
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

		<nav style={{
				margin: `0 auto`,
				maxWidth: 960,
			}}>
			<ul>
				<li>
					<Link to="/" className={ activeItem == '0' ? 'active' : 'not-active'}>Home</Link>
				</li>
				<li>
					<Link to="/page-1-static/" className={ activeItem == '1' ? 'active' : 'not-active'}>Static Graph QL Example</Link>
				</li>
				<li>
					<Link to="/page-2-gql/" className={ activeItem == '2' ? 'active' : 'not-active'}>Dynamic Graph QL Example</Link>
				</li>
				<li>
					<Link to="/page-3-rest/" className={ activeItem == '3' ? 'active' : 'not-active'}>Normal Rest Example</Link>
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
