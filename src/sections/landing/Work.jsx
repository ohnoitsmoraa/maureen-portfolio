import { motion } from "framer-motion";
import { TypingText } from "../../components/animations/TypingText";
import { staggerContainer } from "../../motion";
import { VerticalTimeline } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { workData } from "../../components/data/WorkData";
import WorkCard from "../../components/cards/WorkCard";

const Work = () => {
	return (
		<motion.div
			id="work"
			variants={staggerContainer}
			initial="hidden"
			whileInView="show"
			viewport={{ once: false, amount: 0.1 }}
			className="ms-auto me-auto w-[95%] md:w-full text-slate-200"
		>
			<div className="pt-12 flex flex-col justify-center items-center font-medium">
				<TypingText
					title="Work Experience"
					textStyles="text-4xl mb-10 font-semibold"
				/>
				<div className="">
					<VerticalTimeline lineColor={"#00701c"}>
						{workData.map((work, index) => (
							<WorkCard key={`work-${index}`} work={work} />
						))}
					</VerticalTimeline>
				</div>
			</div>
		</motion.div>
	);
};

export default Work;
