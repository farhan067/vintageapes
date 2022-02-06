/** @format */

import React, { useState } from "react";
import { Card, Button, Container, Row, Col } from "react-bootstrap";
import Tilt from "react-tilt";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import MintSide from "./images/mintSide.png";
import "./MintSection.css";

const MintCard = () => {
	const [counter, setCounter] = useState(0);

	return (
		<>
			<br />

			<Tilt
				className="Tilt"
				options={{
					max: 0,
					reverse: false, // reverse the tilt direction
					max: 15, // max tilt rotation (degrees)
					perspective: 3500, // Transform perspective, the lower the more extreme the tilt gets.
					scale: 1, // 2 = 200%, 1.5 = 150%, etc..
					speed: 300, // Speed of the enter/exit transition
					transition: true, // Set a transition on enter/exit.
					axis: null, // What axis should be disabled. Can be X or Y.
					reset: true, // If the tilt effect has to be reset on exit.
					easing: "cubic-bezier(.03,.98,.52,.99)", // Easing on enter/exit.
				}}>
				<Card
					className="jxZEbo"
					style={{
						// boxShadow: "rgb(38 19 64) 0px 0px 15px",
						marginBottom: "20px",
						textAlign: "center",
						// padding: "25px 20px",
						borderRadius: "20px",
						transition: "all 0.2s ease 0s;",
						backgroundColor: "black",
					}}>
					<Row
						style={{
							backgroundColor: "black",
							alignItems: "center",
						}}>
						<Col xs={12} md={7}>
							<Card.Img
								fluid
								variant="top"
								style={{ height: "100%" }}
								src={MintSide}
							/>
						</Col>

						<Col xs={12} md={5}>
							<Card.Body
								style={{ textAlign: "center", padding: "0", marginLeft: "5%" }}>
								<Row>
									<Col xs={12} md={12}>
										<h3 className="mintHeading">
											MINT PRICE :{"  "}
											<span>0.05</span> <span className="text"> ETH</span>
										</h3>
									</Col>
								</Row>
								<Row>
									<Col xs={12} md={12}>
										<div
											style={{
												display: "flex",
												border: "1px solid white",
												justifyContent: "space-between",
												width: "100%",
											}}>
											<button
												size="sm"
												disabled={counter <= 0}
												className="counterButton"
												onClick={() => {
													setCounter(counter - 1);
												}}>
												<h3>-</h3>
											</button>
											<span className="h3 white">{counter}</span>
											<button
												size="sm"
												disabled={counter >= 10}
												className="rightCounterButton"
												onClick={() => {
													setCounter(counter + 1);
												}}>
												<h3>+</h3>
											</button>
										</div>
									</Col>
								</Row>

								<Row>
									<Col xs={12} md={12} lg={12} sm={12}>
										<Button
											// variant="light"
											className="mintButton"
											// style={{ backgroundColor: "rgb(228, 191, 70)" }}
										>
											Mint
										</Button>
									</Col>
								</Row>

								<h3 className="mintSecondHeading" style={{ marginTop: "3%" }}>
									SUPPORTED WALLET
								</h3>
								<Row>
									<Col xs={12} sm={12} md={12} lg={12}>
										<Button variant="flat " className="metaMaskButton">
											<h4 className="white poppin">MetaMask</h4>
										</Button>
									</Col>
									<p className="poppin red">* MetaMask is not connected</p>
								</Row>
								<Row className="mt-3">
									<Col xs={12} sm={12} md={12} lg={12}>
										<h4 className="white poppin blink">
											Mint more than 1 NFT to get FREE coins and 1 or MORE
											Vintage Kong NFTs (To be launched soon)
										</h4>
									</Col>
								</Row>
							</Card.Body>
						</Col>
					</Row>
				</Card>
			</Tilt>
		</>
	);
};

export default MintCard;
