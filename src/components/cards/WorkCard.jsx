import PropTypes from 'prop-types';
import { VerticalTimelineElement } from "react-vertical-timeline-component";

const WorkCard = ({ work }) => {
  return (
    <VerticalTimelineElement
      className="vertical-timeline-element"
      contentStyle={{
        background: "#005c1700",
        color: "#ffffff",
        boxShadow: "0px 0px 20px -1px #01f53f80",
      }}
      contentArrowStyle={{ borderRight: "7px solid  #0B1120" }}
      date={work.date}
      iconStyle={{ background: work.iconBg }}
      icon={
        <div className="flex justify-center items-center w-full h-full">
          <img
            src={work.icon}
            alt={work.company_name}
            className="w-[60%] h-[60%] object-contain"
            width="36px"
            height="36px"
          />
        </div>
      }
    >
      <div className="relative">
        {work.supported && (
          <a
            href="https://www.microsoft.com/startups?wt.mc_id=studentamb_205967"
            target="_blank"
            rel="noreferrer"
          >
            <span className="absolute text-xs -top-9 -right-6 bg-[#00701c] hover:bg-[#11471f] p-1 rounded-full text-[#ffffff] transition duration-300 ease-in-out">
              {work.supported}
            </span>
          </a>
        )}
        <h3 className="text-[#ffffff] text-[24px] font-bold">{work.title}</h3>
        <p className="text-secondary text-[16px] font-semibold" style={{ margin: 0 }}>
          {work.company_name}
        </p>
      </div>

      <ul className="mt-5 list-disc ml-5 space-y-2">
        {work.points.map((point, index) => (
          <li
            key={`work-point-${index}`}
            className="text-white-100 text-[14px] pl-1 tracking-wider"
          >
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

WorkCard.propTypes = {
  work: PropTypes.shape({
    date: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
    iconBg: PropTypes.string.isRequired,
    supported: PropTypes.string,
    title: PropTypes.string.isRequired,
    company_name: PropTypes.string.isRequired,
    points: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
};

export default WorkCard;
