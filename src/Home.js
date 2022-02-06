/** @format */

import React, { useState, useEffect } from "react";
import Navabar from "./Navabar";
import "./index.css";
import Typewriter from "typewriter-effect";
import Crousel from "./Crousel";
// import { Wave,Random } from 'react-animated-text';
import { Container } from "react-bootstrap";
import MintCard from "./MintCard";
import Grid from "./Grid";
import Roadmap from "./Roadmap";
import Team from "./Team";
import Faq from "./Faq";
import Footer from "./Footer";
import Particles from "react-tsparticles";
import Whitepaper from "./whitepaper";
import HomeBg from "./images/mainBg.jpg";
import MainLogo from "./images/vaLogoRotated.png";
import GlitchSquiggly from "react-glitch-effect/core/GlitchSquiggly";
import GlitchClip from "react-glitch-effect/core/GlitchClip";
import "./components/model.css";
const Home = () => {
	const [distance, setDisctance] = useState(151);

	useEffect(() => {
		setDisctance(152);
	}, []);

	return (
		<>
			<div>
				{/* <video autoplay muted loop id="bgvid" src={HomeBg} type="video/mp4" /> */}

				<GlitchClip class="sc-dOFSHK ihsqNI" disabled={false}>
					<GlitchSquiggly disabled={false}>
						<img
							// class="sc-dOFSHK ihsqNI"
							src={HomeBg}
							style={{ width: "100%", height: "auto" }}
						/>
					</GlitchSquiggly>
				</GlitchClip>

				{/* <img src="./images/moon.png" class="sc-dYZB cOSMNH" /> */}
				<Navabar />
				<div className="upr">
					<div className="container">
						<div className="fihtZS">
							<img
								src={MainLogo}
								class="sc-jMljuz ksoXNI"
								// style={{
								// 	animation: "5s ease 0s infinite normal none running pulse;",
								// }}
							/>

							<br />
							{/* <h2 className="headgarage">FOR THE PEOPLE PROJECT</h2> */}
							<h1 class="neon" data-text="U">
								FORTUNE<span class="flicker-slow"> OF </span>A
								<span class="flicker-fast"> LIFE</span>TIME
							</h1>
							<br />
							<p class="neon_p" data-text="U">
								<span class="flicker-faster">
									10,000 Randomly Generated APES of 4 Types, Each with 100%
									Unique Characteristics
								</span>
							</p>

							<br />
						</div>
					</div>
				</div>
			</div>
			<Container>
				<div className="mx-auto cl" style={{ width: "100%", height: "600px" }}>
					<Crousel />
				</div>
			</Container>

			<Whitepaper />

			<div className="Container">
				<br />
				<br />
				<br />
				<center>
					<h1 className="rm headings">MINTING DATE TO BE ANNOUNCED</h1>
				</center>
			</div>

			<Container fluid>
				<div
					style={{
						transform:
							" perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)",
						padding: "60px 60px",
					}}>
					<MintCard />
				</div>
			</Container>
			<Grid />
			<Roadmap />
			{/* <Team />
			<Partners /> */}
			<Faq />
			<Footer />
		</>
	);
};

export default Home;
