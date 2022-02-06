/** @format */

import React from "react";
import { Card, Button, Col, Container, Row } from "react-bootstrap";
import Gif from "./images/logoGif.gif";
import "./MintSection.css";
import "./components/model.css";
const Whitepaper = () => {
	return (
		<Container
			id="ABOUT"
			// className="dmodel"
			style={{
				marginTop: "150px",
				marginBottom: "150px",
				alignItems: "center",
			}}>
			<Row
				xs={12}
				sm={12}
				md={12}
				lg={12}
				style={{
					alignItems: "center",
				}}>
				<Col xs={12} sm={12} md={6} lg={6}>
					<center>
						<h1 className="rm headings">ABOUT</h1>
					</center>
					<p className="h1-3dbullsd">
						<span className="dancingFont blink" style={{ color: "#99caf1" }}>
							Vintage Apes
						</span>{" "}
						is NOT just an NFT collection like any other project. This is a{" "}
						<span className="blink">HIGHWAY TO SKYWAY</span>. This is going to
						be a hub for <span className="blink">investment</span> and{" "}
						<span className="blink">passive income</span>. We are going to
						launch our coin. Then we are going to introduce{" "}
						<span className="blink"></span>PLAY TO EARN games and the ones who
						hold the{" "}
						<span className="dancingFont blink" style={{ color: "#99caf1" }}>
							Vintage Apes
						</span>{" "}
						will get the share of the earnings of the games. This is just the
						fucking start ...
					</p>
					<center>
						<h2 className="rm headings" style={{ fontSize: "50px" }}>
							THEME
						</h2>
					</center>
					<p className="h1-3dbullsd">
						The theme of this project is based on the stereotypes of the Vintage
						times. We have merged the common trends of 90s, 80s, 70s, 60s and
						50s into the APES. So WELCOME to the times we've all been missing.
						Be a part of this project and get into that Vintage feel.
						<h5 className="white poppin blink">
							APES are rolling, the others are Stoned!
						</h5>
					</p>
				</Col>
				<Col xs={12} sm={12} md={6} lg={6}>
					<Card.Img fluid variant="top" style={{ height: "100%" }} src={Gif} />
				</Col>
			</Row>
		</Container>
	);
};

export default Whitepaper;
