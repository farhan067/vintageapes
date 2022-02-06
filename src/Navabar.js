/** @format */

import React, { useEffect, useState, useCallback } from "react";
import "./App.js";
import { Container, Navbar, Nav } from "react-bootstrap";

const Navabar = () => {
	const [y, setY] = useState(window.scrollY);
	const [isTransparent, setIsTransparent] = useState(true);
	const [isClass, setIsclass] = useState("");

	const handleNavigation = useCallback(
		(e) => {
			const window = e.currentTarget;
			if (window.scrollY <= 50) {
				setIsTransparent(true);
			} else if (isTransparent && y < window.scrollY) {
				setIsTransparent(false);
			}
			setY(window.scrollY);
		},
		[y]
	);

	useEffect(() => {
		window.addEventListener("scroll", (e) => handleNavigation(e));

		return () => {
			// return a cleanup function to unregister our function since its gonna run multiple times
			window.removeEventListener("scroll", (e) => handleNavigation(e));
		};
	}, [y]);

	const style = () => {
		if (isClass === "") setIsclass("click");
		else setIsclass("");
	};

	return (
		<>
			<Navbar
				collapseOnSelect
				expand="lg"
				variant="dark"
				sticky="top"
				className={isTransparent ? `bg1 ${isClass}` : "stick navbar click"}
				style={{}}>
				<Container
					style={
						{
							// justifyContent: "space-between",
							// border: "2px solid white",
							// display: "flex",
						}
					}>
					{/* <Navbar.Brand href="#home">Home</Navbar.Brand> */}
					<Navbar.Toggle
						onClick={style}
						aria-controls="responsive-navbar-nav"
						style={
							{
								// width: "16%",
								// justifyContent: "space-between",
								// border: "2px solid blue",
							}
						}
					/>
					<Navbar.Collapse id="responsive-navbar-nav">
						<Nav
							className="ms-auto"
							style={
								{
									// justifyContent: "space-between",
									// display: "flex",
									// border: "2px solid blue",
								}
							}>
							<Nav.Link href="/" style={{ color: "white" }} className="nlink">
								HOME
							</Nav.Link>

							<Nav.Link
								className="nlink"
								style={{ color: "white" }}
								href="#BULLS">
								APES
							</Nav.Link>
							<Nav.Link
								className="nlink"
								style={{ color: "white" }}
								href="#ABOUT">
								ABOUT
							</Nav.Link>
							<Nav.Link
								className="nlink"
								style={{ color: "white" }}
								href="#MINT">
								MINT
							</Nav.Link>
							<Nav.Link
								className="nlink"
								style={{ color: "white" }}
								href="#STATS">
								STATS
							</Nav.Link>
							<Nav.Link
								className="nlink"
								style={{ color: "white" }}
								href="#ROADMAP">
								ROADMAP
							</Nav.Link>
							{/* <Nav.Link
								className="nlink"
								style={{ color: "white" }}
								href="#TEAM">
								TEAM
							</Nav.Link> */}
							<Nav.Link
								className="nlink"
								style={{ color: "white" }}
								href="#FAQS">
								FAQS
							</Nav.Link>
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</>
	);
};

export default Navabar;
