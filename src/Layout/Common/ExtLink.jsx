import PropTypes from "prop-types";

const ExtLink = ({ to, children, ...props }) => {
	return (
		<a href={to} target="_blank" rel="noopener noreferrer" {...props}>
			{children}
		</a>
	);
};

ExtLink.propTypes = {
	to: PropTypes.string.isRequired,
};

export { ExtLink };
