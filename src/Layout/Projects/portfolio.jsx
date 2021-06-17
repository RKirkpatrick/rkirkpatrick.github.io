const Portfolio = ({ title }) => {
	return (
		<>
			<article className="boxshadow">
				<h1>{title}</h1>
			</article>
			<article className="boxshadow">
				<iframe
					src="https://ryankirkpatrick.net/projects/portfolio"
					title="Portfolio website"
				></iframe>
			</article>
		</>
	);
};

export default Portfolio;
