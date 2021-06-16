import PropTypes from "prop-types";

const ExtLink = ({ to, children }) => {
	return (
		<a href={to} target="_blank" rel="noopener noreferrer">
			{children}
		</a>
	);
};

ExtLink.propTypes = {
	to: PropTypes.string.isRequired,
};

export { ExtLink };
