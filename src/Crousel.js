/** @format */

import React, { useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import CarouselItem from "./CarouselItem";
import image1 from "./images/GoldenSnubNosed/2001.png";
import image2 from "./images/GoldenSnubNosed/2002.png";
import image3 from "./images/GoldenSnubNosed/2003.png";
import image4 from "./images/GoldenSnubNosed/2004.png";
import image5 from "./images/GoldenSnubNosed/2008.png";

import image6 from "./images/HamadryasBaboon/2001.png";
import image7 from "./images/HamadryasBaboon/2002.png";
import image8 from "./images/HamadryasBaboon/2004.png";
import image9 from "./images/HamadryasBaboon/2005.png";
import image10 from "./images/HamadryasBaboon/2010.png";

import image11 from "./images/EmperrorTamarin/2002.png";
import image12 from "./images/EmperrorTamarin/2003.png";
import image13 from "./images/EmperrorTamarin/2004.png";
import image14 from "./images/EmperrorTamarin/2005.png";
import image15 from "./images/EmperrorTamarin/2009.png";

import image16 from "./images/Mandrill/2001.png";
import image17 from "./images/Mandrill/2002.png";
import image18 from "./images/Mandrill/2003.png";
import image19 from "./images/Mandrill/2004.png";
import image20 from "./images/Mandrill/2010.png";

const Crousel = () => {
	const [array1, setArray] = useState([
		{
			img: image1,
			name: "Golden Snub Nosed Monkey",
			// des: "Project Manager/Founder ",
		},
		{
			img: image2,
			name: "Golden Snub Nosed Monkey",
			// des: "Project Manager/Founder ",
		},
		{
			img: image3,
			name: "Golden Snub Nosed Monkey",
			// des: "Project Manager/Founder ",
		},
		{
			img: image4,
			name: "Golden Snub Nosed Monkey",
			// des: "Project Manager/Founder ",
		},
		{
			img: image5,
			name: "Golden Snub Nosed Monkey",
			// des: "Project Manager/Founder ",
		},
		{ img: image6, name: "Hamadryas Baboon" },
		{ img: image7, name: "Hamadryas Baboon" },
		{ img: image8, name: "Hamadryas Baboon" },
		{ img: image9, name: "Hamadryas Baboon" },
		{ img: image10, name: "Hamadryas Baboon" },
		{ img: image11, name: "Emperror Tamarin" },
		{ img: image12, name: "Emperror Tamarin" },
		{ img: image13, name: "Emperror Tamarin" },
		{ img: image14, name: "Emperror Tamarin" },
		{ img: image15, name: "Emperror Tamarin" },
		{ img: image16, name: "Mandrill" },
		{ img: image17, name: "Mandrill" },
		{ img: image18, name: "Mandrill" },
		{ img: image19, name: "Mandrill" },
		{ img: image20, name: "Mandrill" },
	]);
	const responsive = {
		desktop: {
			breakpoint: { max: 3000, min: 1020 },
			items: 4,
			slidesToSlide: 3, // optional, default to 1.
		},
		tablet: {
			breakpoint: { max: 1019, min: 464 },
			items: 2,
			slidesToSlide: 2, // optional, default to 1.
		},
		mobile: {
			breakpoint: { max: 464, min: 0 },
			items: 1,
			slidesToSlide: 1, // optional, default to 1.
		},
	};

	return (
		<>
			<Carousel
				swipeable={true}
				draggable={true}
				showDots={false}
				responsive={responsive}
				ssr={true} // means to render carousel on server-side.
				infinite={true}
				autoPlay={true}
				autoPlaySpeed={2000}
				keyBoardControl={true}
				customTransition="all .5"
				transitionDuration={1000}
				containerClass="carousel-container"
				removeArrowOnDeviceType={["tablet", "mobile", "desktop"]}
				//   deviceType={this.props.deviceType}
				dotListClass="custom-dot-list-style"
				itemClass="carousel-item-padding-40-px">
				{array1.map((item) => (
					<CarouselItem item={item} />
				))}
			</Carousel>
		</>
	);
};

export default Crousel;
