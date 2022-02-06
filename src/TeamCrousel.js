/** @format */

// /** @format */

// import React, { useState } from "react";
// import Carousel from "react-multi-carousel";
// import "react-multi-carousel/lib/styles.css";
// import CarouselItemT from "./TeamCrouselItem";

// const TCrousel = () => {
// 	const [array1, setArray] = useState([
// 		{ img: image1, name: "BULL | Decryptr", des: "Project Manager/Founder " },
// 		{
// 			img: image5,
// 			name: "BULL | TrewQrypto ",
// 			des: "Head Marketer/ Co-Founder ",
// 		},
// 		{ img: image3, name: "BULL | PNW Developer ", des: "Head Developer   " },
// 		{ img: image6, name: "BULL | Serenity  ", des: "Community Manager/Mod " },
// 	]);
// 	const responsive = {
// 		desktop: {
// 			breakpoint: { max: 3000, min: 1020 },
// 			items: 4,
// 			slidesToSlide: 3, // optional, default to 1.
// 		},
// 		tablet: {
// 			breakpoint: { max: 1019, min: 464 },
// 			items: 2,
// 			slidesToSlide: 2, // optional, default to 1.
// 		},
// 		mobile: {
// 			breakpoint: { max: 464, min: 0 },
// 			items: 1,
// 			slidesToSlide: 1, // optional, default to 1.
// 		},
// 	};

// 	return (
// 		<>
// 			<Carousel
// 				swipeable={true}
// 				draggable={true}
// 				showDots={false}
// 				responsive={responsive}
// 				ssr={true} // means to render carousel on server-side.
// 				infinite={true}
// 				//   autoPlay={this.props.deviceType !== "mobile" ? true : false}
// 				autoPlaySpeed={1000}
// 				keyBoardControl={true}
// 				customTransition="all .5"
// 				transitionDuration={500}
// 				containerClass="carousel-container"
// 				removeArrowOnDeviceType={["tablet", "mobile", "desktop"]}
// 				//   deviceType={this.props.deviceType}
// 				dotListClass="custom-dot-list-style"
// 				itemClass="carousel-item-padding-40-px">
// 				{array1.map((item) => (
// 					<div>
// 						<CarouselItemT item={item} />
// 					</div>
// 				))}
// 			</Carousel>
// 		</>
// 	);
// };

// export default TCrousel;
