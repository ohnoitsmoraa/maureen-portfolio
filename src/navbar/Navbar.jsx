import { motion } from "framer-motion";
import { navVariants } from "../../motion";

const Navbar = () => {
	return (
		<motion.nav
			variants={navVariants}
			initial="hidden"
			whileInView="show"
			className="m-o z-10 h-16 md:flex items-center transition ease-in-out hidden 2xl:max-w-[1530px]"
		>
			<div className=" w-[95%] md:w-[90%] ms-auto me-auto flex justify-between items-center">
				<ul className="w-[70%] md:flex items-center justify-around hidden text-[#01f53f] text-xl font-bold">
					<li className=" hover:scale-110 transition ease-in-out duration-150">
						{" "}
						<a href="#about">About Me</a>
					</li>
					<li className=" hover:scale-110 transition ease-in-out duration-150">
						{" "}
						<a href="#projects">Projects</a>
					</li>
					<li className=" hover:scale-110 transition ease-in-out duration-150">
						{" "}
						<a href="#work">Work</a>
					</li>

					<li className=" hover:scale-110 transition ease-in-out duration-150">
						{" "}
						<a href="#contact">Contact</a>
					</li>
				</ul>
			</div>
		</motion.nav>
	);
};

export default Navbar;
