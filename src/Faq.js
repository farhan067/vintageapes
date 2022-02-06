/** @format */

import React from "react";
import { Accordion, Container } from "react-bootstrap";
const Faq = () => {
	return (
		<>
			<div className="faqs">
				<Container>
					<center>
						<h2 id="FAQS" className="rm headings">
							FAQS
						</h2>
					</center>
					<Accordion defaultActiveKey="0" style={{ color: "black" }}>
						<Accordion.Item
							style={{ backgroundColor: "black", color: "white" }}>
							<Accordion.Header
								className="accordhead"
								style={{ borderTop: "1px solid white !important" }}>
								❓What are Vintage Apes?{" "}
							</Accordion.Header>
							<Accordion.Body>
								✅ Vintage Apes is a long term project for people to earn insane
								profits. Right after the launch of our second collection we will
								launch our game known as Kong Trap, that will have Coin Staking
								and NFT Staking. In Kong Trap a certain % of the Unstaked amount
								will be transfered to the NFT holders. This way people will keep
								on earning.
							</Accordion.Body>
						</Accordion.Item>
						<Accordion.Item
							eventKey="1"
							style={{ backgroundColor: "black", color: "white" }}>
							<Accordion.Header className="accordhead">
								❓How many traits are there?{" "}
							</Accordion.Header>
							<Accordion.Body>
								✅ There are 150 awesome traits that will be randomly generated
								onto your Apes to make every single one of them 100% unique
							</Accordion.Body>
						</Accordion.Item>

						<Accordion.Item
							eventKey="2"
							style={{ backgroundColor: "black", color: "white" }}>
							<Accordion.Header className="accordhead">
								❓How many Vintage Apes will there be?{" "}
							</Accordion.Header>
							<Accordion.Body>
								✅ In total, there will be 10,000 generated Vintage Apes
							</Accordion.Body>
						</Accordion.Item>

						<Accordion.Item
							eventKey="3"
							style={{ backgroundColor: "black", color: "white" }}>
							<Accordion.Header className="accordhead">
								❓How much will the Vintage Apes cost to mint?{" "}
							</Accordion.Header>
							<Accordion.Body>
								✅ You can buy Vintage Apes at a price of 0.035 ETH <br />
							</Accordion.Body>
						</Accordion.Item>

						<Accordion.Item
							eventKey="4"
							style={{ backgroundColor: "black", color: "white" }}>
							<Accordion.Header className="accordhead">
								❓When is the drop?{" "}
							</Accordion.Header>
							<Accordion.Body>
								✅ Drop date has yet to be determined but rest assured we are
								working as hard and as fast as we can to get this drop out to
								you guy as fast as possible. (This will be updated once we
								decide on a drop date)
							</Accordion.Body>
						</Accordion.Item>

						<Accordion.Item
							eventKey="5"
							style={{ backgroundColor: "black", color: "white" }}>
							<Accordion.Header className="accordhead">
								❓Is there a limit to how many Vintage Apes I can buy?{" "}
							</Accordion.Header>
							<Accordion.Body>
								✅ There is no limit, you can buy as many as you want. You will
								have more market share for the greater number of Apes you buy.{" "}
								<br />✅ With our efficient algorithm the gas fees charged will
								be comparitively less for multi-mint.
							</Accordion.Body>
						</Accordion.Item>
					</Accordion>
				</Container>
			</div>
		</>
	);
};

export default Faq;
