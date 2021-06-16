import PropTypes from "prop-types";

const Image = ({ path, lowRes, highRes, description, author, year }) => {
	return (
		<figure>
			<a href={path + highRes} target="_blank" rel="noopener noreferrer">
				<img
					src={path + lowRes}
					alt={description}
					title={"\u00A9 " + author + " " + year}
				/>
			</a>
			<figcaption>{description}</figcaption>
		</figure>
	);
};

const Container = ({ path, images, children }) => {
	function getContent() {
		if (images) {
			return images.map((image, index) => {
				return (
					<Image
						key={index}
						path={path}
						lowRes={image.lowRes}
						highRes={image.hiRes}
						description={image.description}
						author={image.author}
						year={image.year}
					/>
				);
			});
		}
		return children;
	}

	return (
		<>
			<br className="clear" />
			<div className="masonry">{getContent()}</div>
			<br className="clear" />
		</>
	);
};

Image.propTypes = {
	path: PropTypes.string.isRequired,
	lowRes: PropTypes.string.isRequired,
	highRes: PropTypes.string.isRequired,
};

Container.propTypes = {
	path: PropTypes.string.isRequired,
	images: PropTypes.array.isRequired,
};

export { Image, Container };
export default Container;
