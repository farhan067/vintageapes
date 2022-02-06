/** @format */

import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
const Terms = (props) => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, [props]);
	return (
		<>
			<div style={{ backgroundColor: "white" }}>
				<div></div>
				<img src="./images/rocketbanners.png" width="100%" height="475px" />

				<Container>
					<div
						style={{
							display: "flex",
							justifyContent: "Center",
							alignItems: "center",
							flexDirection: "column",
						}}>
						<h2 className="rm rm22 mt-3" style={{ color: "black" }}>
							ROCKET PASS LINK
						</h2>
						<br /> <br />
						<Row>
							<Col md={12}>
								<div style={{ float: "right", width: "50%" }}>
									<img width="100%" src="./images/GIF.gif" />
								</div>
								<p className="timeline_text">
									<b> What is the Rocket Pass Link?</b> <br />- The Rocket Pass
									is your one way ticket TO THE MOON! We are giving our members
									the opportunity to earn ETH during our mint!
									<br></br>
									- You will be able to earn 5% on every person who uses your
									Rocket Pass link to mint on our website!
									<br />
									- We will have a SPECIAL GIVEAWAY for the top 3 BULLS with the
									most referrals!!
									<br />
									<br />
									<b>How do I get my Rocket Pass Link?</b>
									<br />{" "}
									<ul>
										<li>Go to Vintageapes.com</li>
										<li>Connect metamask (wallet A)</li>
										<li>
											Click Reference-Url button and url will be appear , copy
											it.
										</li>
										<li>
											Using this URL you can recommend others for minting.
										</li>
										<li>Access site using Reference-Url</li>{" "}
										<li>Connect metamask (wallet B)</li>{" "}
										<li>
											Mint tokens, balance against the wallet that refer you
											will increment by one.
										</li>
									</ul>
									-Note: Whenever any user mint token using your url , counter
									against your record will be incremented by 1
								</p>

								<p className="timeline_text">
									<br />
									<br />
									<b>
										Do I have to be an ImmutaBull member to participate?
									</b>{" "}
									<br /> - NOPE, anyone can generate a Rocket Pass Link and get
									the rewards if you get someone to use your link to mint on our
									official website.
									<br />
									- You do NOT have to mint an ImmutaBull to participate and get
									the rewards. Although we HIGHLY recommend you do mint at least
									one to have the chance to win one of our INCREDIBLE giveaways!
									<br />
									<br />
									<b>Example of how the Rocket Pass Link works:</b> - If you get
									ONE person to use your Rocket Pass Link to mint on our website
									you will receive 0.007 ETH in rewards.
									<br />- If you get 50 people to use your Rocket Pass Link to
									mint on our website you will receive 0.175 ETH in rewards.
									<br />- If you get 100 people to use your Rocket Pass Link to
									mint on our website you will receive 0.35 ETH in rewards which
									is about $1,400! Just for sending your link to a bunch of
									people!
									<br />
									<br />
									<b>
										Is there a limit to how much ETH I can make from this and
										when can I expect to get the ETH I earned?
									</b>{" "}
									<br />
									- Right after our public sale ends you will receive your
									rewards, within 2 hours.
									<br />- The awesome part is that there is NO LIMIT to how much
									ETH you can make! Theoretically, if you had 500 people use
									your link to mint on our website, you would get 1.75 ETH in
									rewards sent directly to your wallet after our public sale!
									<br />
									<br />
									<b>How do we know we will get the rewards?</b> <br />
									- Since you already gave us your wallet address, we will have
									that coded directly into our smart contract therefor you will
									automatically get your rewards as soon as we sell out!
									<br />
								</p>
							</Col>
						</Row>
					</div>
				</Container>
			</div>
		</>
	);
};

export default Terms;
