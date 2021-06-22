import { ExtLink } from "../Common/ExtLink";

const Portfolio = ({ title, recursionDisabled }) => {
	return (
		<>
			<article className="boxshadow">
				<h1>{title}</h1>
			</article>
			<article className="boxshadow">
				{recursionDisabled ? (
					""
				) : (
					<iframe
						src="https://ryankirkpatrick.net"
						title="Portfolio website"
					></iframe>
				)}
				<h2>
					Warning: Potential infinite recursion. If you experience any of the
					following symptoms please click <ExtLink to="">here</ExtLink>:
					<ul>
						<li>Headache</li>
						<li>Nausea</li>
						<li>Death</li>
					</ul>
				</h2>
				<ExtLink to="https://github.com/RKirkpatrick/rkirkpatrick.github.io">
					Github
				</ExtLink>
			</article>
		</>
	);
};

export default Portfolio;
