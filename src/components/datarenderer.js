import React from "react"

class DataRenderer {

	dataSection(original, toggleFun) {
		console.log("Data from Back end - datarenderer", original);
		console.log("Data size", size);
		const dataSize = ( original ? original.length : 0);
		return (
			<div>
				{size > 10 ?
					<div class="originaldata">
						<button type="button" onClick={ toggleFun } class="collapsible">Size of product data transmitted {dataSize}. Click to view data.</button>
						<div class="content">
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
