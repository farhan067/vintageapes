/** @format */

import React, { useState } from "react";
import { Container, Row } from "react-bootstrap";
import RoadmapItem from "./RoadmapItem";
const Roadmap = () => {
	return (
		<>
			<Container>
				<h2
					className="rhead"
					style={{
						textAlign: "center",
						marginBottom: "220px;",
					}}>
					<span class="rm headings" id="ROADMAP">
						ROADMAP
					</span>
				</h2>

				<Row>
					<div className="col-md-6 mystyle" id="myDIV">
						<div className="outdiv" style={{ textAlign: "center" }}>
							<h4 class="sc-bZDghR bGpAVo">Phase#1</h4>
							<div class="sc-joieSO eOacZT"></div>

							<ul class="sc-fpiMtx bdHFAK">
								<li class="sc-fasiqY kljFiv mt-4">
									Launch of the Vintage Apes
									<div class="sc-hRDjxv bRWKNv"></div>
								</li>
							</ul>
						</div>
					</div>
					<div className="col-md-6 mystyle" id="myDIV">
						<div className="outdiv" style={{ textAlign: "center" }}>
							<h4 class="sc-bZDghR bGpAVo">Phase#2</h4>
							<div class="sc-joieSO eOacZT"></div>

							<ul class="sc-fpiMtx bdHFAK">
								<li class="sc-fasiqY kljFiv mt-4">
									Launch of the Banana Coin
									<div class="sc-hRDjxv bRWKNv"></div>
								</li>
							</ul>
						</div>
					</div>
				</Row>
				<Row>
					<div className="col-md-6 mystyle" id="myDIV">
						<div className="outdiv" style={{ textAlign: "center" }}>
							<h4 class="sc-bZDghR bGpAVo">Phase#3</h4>
							<div class="sc-joieSO eOacZT"></div>

							<ul class="sc-fpiMtx bdHFAK">
								<li class="sc-fasiqY kljFiv mt-4">
									Launch of Play to Earn Games
									<div class="sc-hRDjxv bRWKNv"></div>
								</li>
								<li class="sc-fasiqY kljFiv mt-4">
									Coin Flip game.
									<div class="sc-hRDjxv bRWKNv"></div>
								</li>
								<li class="sc-fasiqY kljFiv mt-4">
									Spin the bottle game.
									<div class="sc-hRDjxv bRWKNv"></div>
								</li>
								<li class="sc-fasiqY kljFiv mt-4">
									And more...
									<div class="sc-hRDjxv bRWKNv"></div>
								</li>
							</ul>
						</div>
					</div>
					<div className="col-md-6 mystyle" id="myDIV">
						<div className="outdiv" style={{ textAlign: "center" }}>
							<h4 class="sc-bZDghR bGpAVo">Phase#4</h4>
							<div class="sc-joieSO eOacZT"></div>

							<ul class="sc-fpiMtx bdHFAK">
								<li class="sc-fasiqY kljFiv mt-4">
									Launch of 3000 Vintage Kongs NFTs
									<div class="sc-hRDjxv bRWKNv"></div>
								</li>
								<li class="sc-fasiqY kljFiv mt-4">
									Launch of Kong Trap Game.
									<div class="sc-hRDjxv bRWKNv"></div>
								</li>
							</ul>
						</div>
					</div>
				</Row>
				<center>
					<h2 className="rm headings" style={{ fontSize: "50px" }}>
						DESCRIPTION
					</h2>
				</center>
				<p className="h1-3dbullsd">
					Firstly we will launch{" "}
					<span className="dancingFont blink" style={{ color: "#99caf1" }}>
						Vintage Apes
					</span>{" "}
					following by the launch of <span className="blink">Banana Coin</span>.
					The ones who will have more than 1 NFT will get a chance to get{" "}
					<span className="blink">FREE</span> coins and on a discounted rate.
					Right after that we will launch{" "}
					<span className="blink">PLAY 2 EARN</span> games. Players will use our
					coin to get their <span className="blink">MONEY DOUBLED</span>. Right
					after that we will launch 3000 or more{" "}
					<span className="dancingFont blink" style={{ color: "#99caf1" }}>
						Vintage Kong
					</span>{" "}
					NFTs. The ones who will have more than 1{" "}
					<span className="dancingFont" style={{ color: "#99caf1" }}>
						Vintage Ape{" "}
					</span>
					will get a chance to get a{" "}
					<span className="dancingFont" style={{ color: "#99caf1" }}>
						Vintage Kong{" "}
					</span>
					for <span className="blink">FREE</span> and on a discounted rate.
					Right after that, we will launch{" "}
					<span className="blink" style={{ color: "white" }}>
						KONG TRAP GAME{" "}
					</span>
					in which there will be <span className="blink"> NFT Staking</span> and{" "}
					<span className="blink">Coin Staking</span>. Whenenver a user will
					stake coins or an NFT, a % of the unstaked amount will be given to the{" "}
					<span className="dancingFont" style={{ color: "#99caf1" }}>
						Vintage Ape
					</span>{" "}
					holders and{" "}
					<span className="dancingFont" style={{ color: "#99caf1" }}>
						Vintage Kong
					</span>{" "}
					holders. THIS IS A WHOLE FUCKING JACKPOT !!!
				</p>
				<center>
					<h2 className="rm headings" style={{ fontSize: "50px" }}>
						Overview of Play to Earn Games
					</h2>
				</center>
				<p className="h1-3dbullsd">
					There are going to be multiple{" "}
					<span className="blink">PLAY TO EARN</span> games. The best part about
					the games is that whenever someone plays the game, a certain
					percentage of the winning amount will be transferred to the NFT
					holders as well. So being a part of this project is a{" "}
					<span className="blink">WIN WIN SITUATION !!!</span>
				</p>
			</Container>
		</>
	);
};

export default Roadmap;
