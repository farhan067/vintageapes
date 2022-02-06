/** @format */

import React from "react";
import { Row } from "react-bootstrap";
const RoadmapItem = ({ item }) => {
	return (
		<>
			<div className="col-md-6 mystyle" id="myDIV">
				<div className="outdiv" style={{ textAlign: "center" }}>
					<h4 class="sc-bZDghR bGpAVo">{item.name}</h4>
					<div class="sc-joieSO eOacZT"></div>

					<ul class="sc-fpiMtx bdHFAK">
						{item.data.map((li, i) => (
							<li key={i} class="sc-fasiqY kljFiv mt-4">
								{li}
								<div class="sc-hRDjxv bRWKNv"></div>
							</li>
						))}
					</ul>
				</div>
			</div>
		</>
	);
};

export default RoadmapItem;
