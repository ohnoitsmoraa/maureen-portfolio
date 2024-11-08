/* eslint-disable react/no-unescaped-entities */
import Cta from "../CTA";

import { IoLogoGithub, IoLogoLinkedin } from "react-icons/io5";
import { FaAnglesDown } from "react-icons/fa6";
import { motion } from "framer-motion";

const Hero = () => {
    return (
			<motion.div
				id="#"
				initial={{ opacity: 0, y: 30 }}
				animate={{ opacity: 1, y: 0 }}
				exit={{ opacity: 0, y: 30 }}
				transition={{ duration: 3 }}
				className="pt-[0.5rem] ms-auto me-auto w-[95%] md:w-full"
			>
				<div className="flex flex-col justify-center items-center font-medium mb-6 tracking-wide">
					<p className=" text-lg md:text-xl mb-2 text-slate-200 font-semibold">
						Hello, I&apos;m
					</p>

					<p className="text-4xl md:text-6xl mb-2 bg-gradient-to-r from-[#00c6ff] to-[#0072ff] bg-clip-text text-transparent font-semibold drop-shadow">
						Maureen Nyanamba
					</p>
					<p className=" text-lg md:text-2xl mb-3 text-slate-200 font-semibold">
						Software Engineer
					</p>
					<Cta />
				</div>
				<div className="flex justify-evenly md:justify-around items-end">
					<div className=" flex flex-col gap-4 text-[#01f53f] text-sm md:text-xl justify-center items-center mb-0 md:mb-6">
						<a
							href="https://www.linkedin.com/in/maureen-moraa/"
							target="_blank"
							rel="noreferrer"
							aria-label="LinkedIn"
						>
							<IoLogoLinkedin />
						</a>
						<a
							href="https://github.com/ohnoitsmoraa"
							target="_blank"
							rel="noreferrer"
							aria-label="GitHub"
						>
							<IoLogoGithub />
						</a>
					</div>

					<img
						className="hero-img w-52 md:w-72"
						src="https://res.cloudinary.com/dvuazircp/image/upload/v1720361359/new_portfolio/gateremark_xea62z.webp"
						alt="Maureen Nyanamba"
						width="288px"
						height="315px"
					/>

					<a
						href="#about"
						className=" animate-bounce text-2xl md:text-3xl text-[#01f53f] mb-0 md:mb-10"
						aria-label="About Section"
					>
						<FaAnglesDown />
					</a>
				</div>
			</motion.div>
		);
};

export default Hero;
