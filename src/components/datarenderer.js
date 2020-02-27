import React from "react"

class DataRenderer {

	dataSection(original, toggleFun) {
		console.log("Data from Back end - datarenderer", original);
		const dataSize = ( original ? original.length : 0);
		console.log("Data size", dataSize);
		return (
			<div>
				{dataSize > 1 ?
					<div class="originaldata">
						<button type="button" onClick={ toggleFun } class="collapsible">Size of product data transmitted {dataSize}. Click to view data.</button>
						<div class="content">
							<p>{original}</p>
						</div>
					</div>
					: <div/>
				}
			</div>
		)
	}
}

const dataRenderer = new DataRenderer().dataSection;

export default dataRenderer;
