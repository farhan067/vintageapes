/** @format */

import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import NumberCounter from "number-counter";
import Particles from "react-tsparticles";

const Grid = () => {
	return (
		<>
			<Container id="STATS">
				<Row className="grida" style={{ alignItems: "center" }}>
					<Col md={6}>
						<div
							style={{
								display: "flex",
								webkitBoxAlign: " center",
								alignItems: "center",
							}}>
							<div class="sc-kJJesS bQzDjt animation-complete">
								<h1 class="sc-ksPmiX bVyPsl">
									<span
										class="sc-cBYbHS bCBsIU"
										style={{ color: "#e4bf46 !important" }}>
										10000+
									</span>{" "}
									Unique Possibilities with over{" "}
									<span
										class="sc-cBYbHS bCBsIU"
										style={{ color: "#e4bf46 !important" }}>
										150+
									</span>{" "}
									Traits
								</h1>
							</div>
						</div>
					</Col>

					<div class="col-md-6">
						<div class="row">
							<div class="col-md-6" style={{ textAlign: "center" }}>
								<div
									class="animated fadeInRight"
									style={{ opacity: "1", height: "auto;" }}>
									<div
										class="sc-kpXqgB irdEaF"
										style={{ marginBottom: " 100px;" }}>
										<div class="sc-dyUqrC gTsSOh counter">
											<span class="value">
												{" "}
												<NumberCounter
													end={4}
													delay={2}
													className="increment"
												/>
											</span>
											<span class="sc-gTKrkG hzZGnW symbol">+</span>
											<div>
												<span class="sc-jwzHer cGuuNR text">Types of APES</span>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div class="col-md-6" style={{ textAlign: "center" }}>
								<div
									class="animated fadeInLeft"
									style={{ opacity: 1, height: "auto;" }}>
									<div class="sc-kpXqgB irdEaF">
										<div class="sc-hWgmdx dwXWNA counter">
											<span class="value">
												{" "}
												<NumberCounter
													end={25}
													delay={1}
													className="increment"
												/>
											</span>
											<span class="sc-bYAVqI hmmFME symbol">+</span>
											<div>
												<span class="sc-fIUAFO iQdDZX text">Backgrounds</span>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div class="col-md-6" style={{ textAlign: "center" }}>
								<div
									class="animated fadeInLeft"
									style={{ opacity: "1", height: "auto;" }}>
									<div class="sc-kpXqgB irdEaF">
										<div class="sc-eiBfEU hdjESN counter">
											<span class="value">
												{" "}
												<NumberCounter
													end={5}
													delay={1}
													className="increment"
												/>
											</span>
											<span class="sc-rehTH dsYiQP symbol">+</span>
											<div>
												<span class="sc-kggwrJ bZowA-d text">
													Different Expressions
												</span>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div class="col-md-6" style={{ textAlign: "center" }}>
								<div
									class="animated fadeInLeft"
									style={{ opacity: "1", height: "auto;" }}>
									<div class="sc-kpXqgB irdEaF">
										<div class="sc-eiBfEU hdjESN counter">
											<span class="value">
												{" "}
												<NumberCounter
													end={25}
													delay={1}
													className="increment"
												/>
											</span>
											<span class="sc-rehTH dsYiQP symbol">+</span>
											<div>
												<span class="sc-kggwrJ bZowA-d text">Clothes</span>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div class="col-md-6" style={{ textAlign: "center" }}>
								<div
									class="animated fadeInLeft"
									style={{ opacity: "1", height: "auto;" }}>
									<div class="sc-kpXqgB irdEaF">
										<div class="sc-eiBfEU hdjESN counter">
											<span class="value">
												{" "}
												<NumberCounter
													end={5}
													delay={1}
													className="increment"
												/>
											</span>
											<span class="sc-rehTH dsYiQP symbol">+</span>
											<div>
												<span class="sc-kggwrJ bZowA-d text">
													Decades (50s/60s/70s/80s/90s)
												</span>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div class="col-md-6" style={{ textAlign: "center" }}>
								<div
									class="animated fadeInLeft"
									style={{ opacity: "1", height: "auto;" }}>
									<div class="sc-kpXqgB irdEaF">
										<div class="sc-eiBfEU hdjESN counter">
											<span class="value">
												{" "}
												<NumberCounter
													end={15}
													delay={1}
													className="increment"
												/>
											</span>
											<span class="sc-rehTH dsYiQP symbol">+</span>
											<div>
												<span class="sc-kggwrJ bZowA-d text">Accessories</span>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</Row>
			</Container>
		</>
	);
};

export default Grid;
