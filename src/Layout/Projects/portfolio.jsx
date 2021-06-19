import { ExtLink } from "../Common/ExtLink";

const Portfolio = ({ title }) => {
	return (
		<>
			<article className="boxshadow">
				<h1>{title}</h1>
			</article>
			<article className="boxshadow">
				<iframe
					src="https://ryankirkpatrick.net"
					title="Portfolio website"
				></iframe>
				<h2>Warning: Infinite recursion depth</h2>
				<ExtLink to="https://github.com/RKirkpatrick/rkirkpatrick.github.io">
					Github
				</ExtLink>
			</article>
		</>
	);
};

export default Portfolio;
