import PropTypes from "prop-types";

const Video = ({ src }) => {
	return (
		<iframe
			title="Embedded video"
			src={src}
			className="aligncenter"
			allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
			allowFullscreen
		/>
	);
};

Video.propTypes = {
	src: PropTypes.string.isRequired,
};

export { Video };
