import PropTypes from 'prop-types';
import { motion } from "framer-motion";
import { fadeIn } from "../../motion";
import { AiFillEye, AiFillGithub } from "react-icons/ai";

const AllProjCard = ({ imgUrl, title, desc, github, live, tech, index }) => {
    return (
        <motion.div
            variants={fadeIn("right", "spring", index * 0.4, 0.75)}
            className="flex flex-col py-6 px-5 sm:h-[475px] bg-[#00000000] backdrop-blur-[1px] shadow-2xl rounded-xl items-center text-center transition-shadow duration-300 ease-in-out hover:shadow-3xl"
        >
            <div className="relative h-[240px]">
                <img
                    src={imgUrl}
                    alt={title}
                    className="w-[100%] mb-4 h-full object-contain rounded-lg"
                    width="240px"
                    height="240px"
                />
                <motion.div
                    whileHover={{ opacity: [0, 1] }}
                    transition={{
                        duration: 0.3,
                        ease: "easeInOut",
                        staggerChildren: 0.5,
                    }}
                    className="absolute inset-0 w-full h-full bg-black bg-opacity-60 rounded-lg opacity-0 transition-all duration-300 ease-in-out flex flex-col justify-center items-center text-[#ffffff] gap-8"
                >
                    <div className="flex justify-evenly items-center w-full">
                        <a
                            href={live}
                            target="_blank"
                            rel="noreferrer"
                            className="bg-[#00000080] p-[6px] rounded-full flex justify-center items-center"
                        >
                            <motion.div
                                whileInView={{ scale: [0, 1] }}
                                whileHover={{ scale: [1, 0.9] }}
                                transition={{ duration: 0.25 }}
                                className="flex justify-center items-center"
                            >
                                <AiFillEye className="text-3xl" />
                            </motion.div>
                        </a>
                        
                        <button
                            disabled={github === "#"}
                            onClick={() => window.open(github, "_blank")}
                            aria-label="Project on GitHub"
                            className="bg-[#00000080] p-[6px] rounded-full flex justify-center items-center"
                        >
                            <motion.div
                                whileInView={{ scale: [0, 1] }}
                                whileHover={{ scale: [1, 0.9] }}
                                transition={{ duration: 0.25 }}
                                className="flex justify-center items-center"
                            >
                                <AiFillGithub className="text-3xl" />
                            </motion.div>
                        </button>
                    </div>
                    <span className="w-full flex flex-wrap gap-1 justify-center items-center px-1">
                        {tech.map((t, index) => (
                            <span
                                key={index}
                                className="text-[#ffffff] text-[14px] font-medium"
                            >
                                {t}
                            </span>
                        ))}
                    </span>
                </motion.div>
            </div>

            <div className="w-[95%] mb-3">
                <h6 className="text-xl font-bold mb-2">{title}</h6>
                <p>{desc}</p>
            </div>
        </motion.div>
    );
};

AllProjCard.propTypes = {
    imgUrl: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
    github: PropTypes.string.isRequired,
    live: PropTypes.string.isRequired,
    tech: PropTypes.arrayOf(PropTypes.string).isRequired,
    index: PropTypes.number.isRequired
};

export default AllProjCard;
