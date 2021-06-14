import PropTypes from "prop-types";

const ExtLink = ({ href, children }) => {
	return (
		<a href={href} target="_blank" rel="noopener noreferrer">
			{children}
		</a>
	);
};

ExtLink.propTypes = {
	href: PropTypes.string.isRequired,
};

export default ExtLink;
