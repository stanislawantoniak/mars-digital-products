import PropTypes from "prop-types"
import React from "react"

const Error = ({id}) => (
	<div class="error">
		<span>Error retrieving product with code: {id}
		</span>
	</div>
)

Error.propTypes = {
	id: PropTypes.string,
}

Error.defaultProps = {
	id: ``,
}
export default Error
