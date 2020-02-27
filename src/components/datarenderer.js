import React from "react"

class DataRenderer {

	dataSection(original, size, active, toggle) {
		console.log("Data from Back end - datarenderer", original);
		console.log("Data size", size);
		console.log("Content active", active);
		return (
			<div>
				{size > 10 ?
					<div class="originaldata">
						<button type="button" onClick={() => toggle } class="collapsible">Size of product data transmitted {size}. Click to view data.</button>
						<div class="content" max-height={active ? '400 px' : '0'}>
							<p>{original}</p>
						</div>
					</div>
					: ''
				}
			</div>
		)
	}

}

const dataRenderer = new DataRenderer().dataSection;

export default dataRenderer;
