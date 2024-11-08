import { useState } from "react";
import { motion } from "framer-motion";
import { TypingText } from "../../components/animations/TypingText";
import ProjectCard from "../../components/cards/ProjectCard";
import { staggerContainer } from "../../motion";
import { BsFillArrowUpRightCircleFill } from "react-icons/bs";
import { Link } from "react-router-dom";

const Projects = () => {
	const projectData = [
		{
            id: "proj-1",
            imgUrl:
                "https://plus.unsplash.com/premium_photo-1664302495846-8be51057b602?q=80&w=1148&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            title: "Geoda Green Suppliers",
            desc: "A responsive web application, for the Geoda Green Suppliers company, to enhance marketing strategy for the company, as it deals with different farming strategies that enhance farmers' experience.",
            github: "#",
            live: "",
            tech: ["Next.js,", "TailwindCSS,"],
        },
        {
            id: "proj-2",
            imgUrl:
                "https://github.com/gafow/XOXO-Dating-Site-/blob/main/public/page-7.jpg?raw=true",
            title: "XOXO - Dating - Site",
            desc: " A modern dating platform designed to create meaningful connections between couples hence strengthening their bonds.",
            github: "#",
            live: "https://xoxo-dating-site.vercel.app/",
            tech: [
                "Socket.io,",
                "TailwindCSS,",
                "Node.js,",
                "JSON WEB Token,"
            ],
        },
        {
            id: "proj-3",
            imgUrl:
                "https://plus.unsplash.com/premium_photo-1682023587521-19219d9f8741?q=80&w=968&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            title: "Bot-Battlr",
            desc: "A responsive web application for a Bot company that accepts purchase of different bots and disqualification of bots. This web application can also serve as a back-end for a gaming server.",
            github: "#",
            live: "https://bot-battlr-black.vercel.app/",
            tech: ["React.js,", "TailwindCSS,"],
        },
        {
            id: "proj-4",
            imgUrl:
                "https://plus.unsplash.com/premium_photo-1661301075857-63868ae88c00?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            title: "Flatiron Bank",
            desc: "An AI-powered app that easens the usage of bank applications like applying loans, making transactions and orders",
            github: "#",
            live: "https://bank-of-flatiron-silk.vercel.app/",
            tech: [
                "Next.js,",
                "TailwindCSS,",
                "Node.js,",
            ],
        },
	];

	const [active, setActive] = useState("proj-2");
	return (
		<motion.div
			id="projects"
			variants={staggerContainer}
			initial="hidden"
			whileInView="show"
			viewport={{ once: false, amount: 0.1 }}
			className="ms-auto me-auto w-[95%] md:w-full text-slate-200"
		>
			<div className="pt-16 flex flex-col justify-center items-center font-medium">
				<TypingText
					title="| Projects"
					textStyles="text-4xl mb-10 font-semibold"
				/>
				<div className="w-[90%] 2xl:w-[85%] flex lg:flex-row flex-col min-h-[70vh] gap-5">
					{projectData.map((proj, index) => (
						<ProjectCard
							key={proj.id}
							{...proj}
							index={index}
							active={active}
							handleClick={setActive}
						/>
					))}
				</div>
				<Link
					to="/projects"
					className="flex flex-col justify-center items-center mt-10 text-xl font-semibold hover:scale-110 transition ease-in-out duration-200"
				>
					<BsFillArrowUpRightCircleFill />
					<TypingText title="More Projects" textStyles="" />
				</Link>
			</div>
		</motion.div>
	);
};

export default Projects;