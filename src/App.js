/** @format */

import React, { Suspense, useRef, useState, useEffect } from "react";
import { Canvas, Renderer, useFrame } from "react-three-fiber";
import {
	FlyControls,
	ContactShadows,
	Environment,
	useGLTF,
	OrbitControls,
	useFBX,
	TrackballControls,
} from "drei";
import { proxy, useProxy } from "valtio";
// import ClipLoader from "react-spinners/ClipLoader";
import { Link } from "react-router-dom";
import "./styles.css";
import "./App.css";
import LoadingScreen from "react-loading-screen";
// import Loader from "react-loader-spinner";
let globalvar;

const state = proxy({
	current: null,
	items: {
		laces: "#ffffff",
		Object006: "#ffffff",
		rightArm: "#ffffff",
		leftArm: "#ffffff",
		mainBody: "#ffffff",
		rightLeg: "#ffffff",
		MaterJ: "#ffffff",
		mesh: "#ffffff",
		caps: "#ffffff",
		inner: "#ffffff",
		sole: "#ffffff",
		stripes: "#ffffff",
		band: "#ffffff",
		patch: "#ffffff",
	},
});

function Shoe({ loading, setLoading }) {
	const ref = useRef();
	const snap = useProxy(state);

	document.addEventListener("message", function (data) {
		alert(data.data);
	});

	let { nodes, materials } = useGLTF("bull.glb");
	console.log(nodes, "nodes");
	console.log(materials, "mat");
	globalvar = materials;

	// Animate model
	useFrame((state) => {
		const t = state.clock.getElapsedTime();
	});

	// // Cursor showing current color
	const [hovered, set] = useState(null);
	const [zoom, setZoom] = useState("");
	// const [parts, setParts] = useState({})
	const [parts, setParts] = useState([]);
	const [skin, setSkin] = useState([]);
	const [combinedArray, setCombinedArray] = useState([]);

	// const [rotationZ, setRotationZ] = useState(0)
	const [active, setActive] = useState(false);

	useEffect(() => {
		console.log(nodes, "sfsdfsdf");
		//   let tempObj = {}
		let tempObj = [];
		let tempSkin = [];
		if (nodes) {
			//   let zeros = "00";
			//   for(let i = 6; i <= 31; i++){
			//     if(i > 9){
			//     zeros = "0"
			//     }
			//     console.log(`Object${zeros}${i}`)
			//     if(i !== 10 && i !== 16 && i !== 28){
			//       // tempObj[`Object${zeros}${i}`] = nodes[`Object${zeros}${i}`].geometry
			//       tempObj.push(nodes[`Object${zeros}${i}`].geometry);
			//       tempSkin[`Object${zeros}${i}`] = materials[`Object${zeros}${i}`]
			//     }

			//   }
			//   console.log(tempObj, "tempObj")
			//   console.log(tempSkin, "tempSkin")
			//   setParts(tempObj);
			//   setSkin(tempSkin);
			// }

			let keys = Object.keys(nodes);
			console.log(keys.length);
			for (let i = 0; i < keys.length; i++) {
				let val = nodes[keys[i]];
				if (val.type === "Mesh") {
					//  tempObj[val.geometry] = val.geometry;
					tempObj.push(val.geometry);
				}

				// tempSkin[val];
				// console.log(tempObj[0],"inner asd");
			}
			let Mat = Object.keys(materials);
			console.log(Mat.length);
			for (let i = 0; i < Mat.length; i++) {
				let val = materials[Mat[i]];

				//  tempObj[val.geometry] = val.geometry;
				tempSkin.push(val);

				// tempSkin[val];
				// console.log(tempObj[0],"inner asd");
			}
			console.log(tempObj, "tempObj123");
			console.log(tempSkin, "tempSkin123");
			setParts(tempObj);
			setSkin(tempSkin);
			const tempComb = [];
			tempObj.map((item, i) => {
				if (tempSkin[i]) {
					tempComb.push({ model: item, material: tempSkin[i] });
				}
			});
			setCombinedArray(tempComb);
			console.log(tempComb, "tempComb");
		}
	}, [nodes]);

	useEffect(() => {
		const cursor = `<svg width="64" height="64" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0)"><path fill="rgba(255, 255, 255, 0.5)" d="M29.5 54C43.031 54 54 43.031 54 29.5S43.031 5 29.5 5 5 15.969 5 29.5 15.969 54 29.5 54z" stroke="#000"/><g filter="url(#filter0_d)"><path d="M29.5 47C39.165 47 47 39.165 47 29.5S39.165 12 29.5 12 12 19.835 12 29.5 19.835 47 29.5 47z" fill="${snap.items[hovered]}"/></g><path d="M2 2l11 2.947L4.947 13 2 2z" fill="#000"/><text fill="#000" style="white-space:pre" font-family="Inter var, sans-serif" font-size="10" letter-spacing="-.01em"><tspan x="35" y="63">${hovered}</tspan></text></g><defs><clipPath id="clip0"><path fill="#fff" d="M0 0h64v64H0z"/></clipPath><filter id="filter0_d" x="6" y="8" width="47" height="47" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/><feOffset dy="2"/><feGaussianBlur stdDeviation="3"/><feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"/><feBlend in2="BackgroundImageFix" result="effect1_dropShadow"/><feBlend in="SourceGraphic" in2="effect1_dropShadow" result="shape"/></filter></defs></svg>`;
		const auto = `<svg width="64" height="64" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill="rgba(255, 255, 255, 0.5)" d="M29.5 54C43.031 54 54 43.031 54 29.5S43.031 5 29.5 5 5 15.969 5 29.5 15.969 54 29.5 54z" stroke="#000"/><path d="M2 2l11 2.947L4.947 13 2 2z" fill="#000"/></svg>`;
		document.body.style.cursor = `url('data:image/svg+xml;base64,${btoa(
			hovered ? cursor : auto
		)}'), auto`;
	}, [hovered]);

	// Using the GLTFJSX output here to wire in app-state and hook up events
	return (
		<group
			ref={ref}
			dispose={null}
			onPointerOver={(e) => (e.stopPropagation(), set(e.object.material.name))}
			onPointerOut={(e) => e.intersections.length === 0 && set(null)}
			onPointerMissed={() => (state.current = null)}>
			{combinedArray.map((item) => {
				return (
					<mesh
						onAfterRender={() => {
							if (loading) setLoading(false);
						}}
						// position={[10, -14, 3]} rotation={[-64,10, 0]}

						//  onClick={() => setActive(!active)}
						position={[0, -0.6, 0.1]}
						rotation={[1.1, 2.2, -1.2]}
						onClick={() => setActive(!active)}
						geometry={item.model}
						material={item.material}

						// material-color={snap.items["Object006"]}
					/>
				);
			})}
		</group>
	);
}

function Picker() {
	const [color, setColor] = useState("#ffffff");
	const snap = useProxy(state);
	// socket.emit("partSelected", snap.current)

	const renderSomething = (color) => {
		state.items[snap.current] = color;
	};
	return <>{renderSomething(color)}</>;
}

export default function App() {
	const [loading, setLoading] = useState(true);
	useEffect(() => {}, []);

	useEffect(() => {
		if (window.innerWidth < 700) {
			window.location.href = "/HOME";
			console.log(window.innerWidth, "width");
		}
	}, [window.innerWidth < 700]);
	console.log(window.innerWidth, "inner width");
	return (
		<>
			<LoadingScreen
				loading={loading}
				bgColor="black"
				spinnerColor="#9ee5f8"
				textColor="#676767"
				// logoSrc='/logo.png'
				text="Loading"
			/>
			<Canvas
				id="mycanvas"
				pixelRatio={[1, 1.5]}
				camera={{ fov: 1.2, near: 0.1, far: 2000, position: [50, 50.9, 0.1] }}>
				<ambientLight intensity={0} />
				<spotLight
					intensity={0}
					angle={1}
					penumbra={1}
					position={[-1.5, 14, 0.5]}
				/>
				<Suspense fallback={null}>
					<Shoe setLoading={setLoading} loading={loading} />
					<Environment files="royal_esplanade_1k.hdr" />
					<ContactShadows
						position={[10, 0.8, 0]}
						opacity={1.25}
						width={10}
						height={10}
						blur={2}
						far={1}
					/>
				</Suspense>

				<TrackballControls
					minAzimuthAngle={0}
					maxAzimuthAngle={0}
					// minPolarAngle={Math.PI}
					minPolarAngle={0}
					// maxPolarAngle={Math.PI}
					maxPolarAngle={90}
					rotateSpeed={1}
					noZoom={false}
					autoRotate={true}
					minZoom={10}
				/>
			</Canvas>

			<div id="button-container" className="button con">
				{/* <Link to="/HOME" > */}
				<button
					id="who-are-we"
					onClick={() => {
						window.location.href = "/HOME";
					}}
					class="font-spec bu">
					ENTER
				</button>
				{/* </Link> */}
			</div>
		</>
	);
}
