import AnimatedCursor from "react-animated-cursor";

import Home from "./sections/Home";
import ProjectsPage from "./sections/ProjectsPage";
import ErrorPage from "./sections/404";
import StarBackground from "./background/StarBackground.tsx";
import ShootingStars from "./background/ShootingStars.tsx";

import { Routes, Route } from "react-router-dom";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

function App() {
	const firebaseConfig = {
		apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
		authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
		projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
		storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
		messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
		appId: process.env.REACT_APP_FIREBASE_APP_ID,
		measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID,
	};

	// Initialize Firebase
	const app = initializeApp(firebaseConfig);
	try {
		getAnalytics(app);
	} catch (error) {
		console.error("Firebase analytics failed to initialize:", error);
	}

	return (
		<div className="transition-all ease-in-out duration-500 relative">
			<div
				className="absolute h-screen overflow-x-hidden before:content-[''] before:absolute before:inset-0 before:-z-10
							before:left-1/2 before:top-[-50px] before:transform before:-translate-x-1/2 before:-translate-y-1/2
							before:h-[250px] before:w-[800px] before:mix-blend-color-dodge before:rounded-full
							before:blur-[62px] before:bg-gradient-to-t before:from-[rgba(43,0,255,0.415)]
							before:to-[rgba(255,0,0,0.8)] before:pointer-events-none"
			>
				<div className="fixed w-full h-screen -z-10">
					<StarBackground />
					<ShootingStars />
				</div>
			</div>

			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/projects" element={<ProjectsPage />} />
				<Route path="/*" element={<ErrorPage />} />
			</Routes>

			<AnimatedCursor
				innerSize={20}
				outerSize={20}
				color="4, 180, 224"
				outerAlpha={0.2}
				innerScale={0.7}
				outerScale={5}
				clickables={[
					"a",
					"Link",
					'input[type="text"]',
					'input[type="email"]',
					'input[type="number"]',
					'input[type="submit"]',
					'input[type="image"]',
					'div[className="projects"]',
					"label[for]",
					"select",
					"textarea",
					"Particles",
					"button",
					".link",
					".customize",
					".have__cursor",
				]}
			/>
		</div>
	);
}

export default App;
