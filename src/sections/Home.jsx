import Navbar from "../components/navbar/Navbar";

import Hero from "./landing/Hero";
import About from "./landing/About";
import Projects from "./landing/Projects";
import Work from "./landing/Work";
import Contact from "./landing/Contact";
import FloatingNav from "../components/navbar/FloatingNav";
import { useRef, useState, useEffect } from "react";

function Home() {
	const mainRef = useRef();
	const [showFloatingNav, setShowFloatingNav] = useState(true);
	const [siteYPosition, setSiteYPosition] = useState(0);

	const showFloatingNavHandler = () => {
		setShowFloatingNav(true);
	};
	const hideFloatingNavHandler = () => {
		setShowFloatingNav(false);
	};

	useEffect(() => {
		const floatingNavToggleHandler = () => {
			if (
				siteYPosition < mainRef?.current?.getBoundingClientRect().y - 5 ||
				siteYPosition > mainRef?.current?.getBoundingClientRect().y + 5
			) {
				showFloatingNavHandler();
			} else {
				hideFloatingNavHandler();
			}

			setSiteYPosition(mainRef?.current?.getBoundingClientRect().y);
		};

		const checkYPosition = setInterval(floatingNavToggleHandler, 2000);
		return () => clearInterval(checkYPosition);
	}, [siteYPosition]);

	return (
		<div
			className=" transition-all ease-in-out duration-500 2xl:w-full 2xl:flex flex-col justify-center items-center"
			ref={mainRef}
		>
			<div className="2xl:max-w-[1530px]">
				<Navbar />
				<Hero />
				<About />
				<Projects />
				<Work />
				<Contact />

				{showFloatingNav && <FloatingNav />}
			</div>
		</div>
	);
}

export default Home;
