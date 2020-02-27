import React from "react"

class DataRenderer {

	dataSection(original, size, active, toggle) {
		console.log("Data from Back end - renderer", data.product);
		return (
			<div>
				{original ?
					<div class="originaldata">
						<button type="button" onClick={() => toggle } class="collapsible">Size of product data transmitted {size}. Click to view data.</button>
						<div class="content" max-height={active ? '100 px' : '0'}>
							<p>ks fdasd safdj askdj fkasdf jsakdj sj fksdf jsdfjdsdfj sj ksjaf;kldj ffksdf ksdfk jskfjdsdj jsakfdj askljdf alsj fdjasfd jsa
								 jfhjkfjkashdfjshadj fhshadfjhasdfhshdjklh</p>
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
