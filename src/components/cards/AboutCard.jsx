import PropTypes from 'prop-types';

const Card = ({ children, onClick }) => {
    return (
        <article
            className="flex flex-col gap-2 justify-center items-center p-2 transition ease-in-out duration-500 hover:bg-[#ffffff00] hover:translate-y-[0.5rem]"
            onClick={onClick}
        >
            {children}
        </article>
    );
};

// Define PropTypes for the component
Card.propTypes = {
    children: PropTypes.node.isRequired, 
    onClick: PropTypes.func,            
};

export default Card;
