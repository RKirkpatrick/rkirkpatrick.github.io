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

export { Image };
