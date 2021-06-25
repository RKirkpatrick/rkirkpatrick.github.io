import { useState } from "react";
import { Link } from "react-router-dom";
import { ExtLink } from "../Common/ExtLink";

const Portfolio = ({ title }) => {
	const [recursion, setRecursion] = useState(true);

	function clickHandler() {
		setRecursion(false);
	}

	return (
		<>
			<article className="boxshadow">
				<h1>{title}</h1>
			</article>
			<article className="boxshadow">
				{!recursion ? (
					<iframe
						title="Portfolio website"
						style={{ maxWidth: "100%", height: "720px" }}
					></iframe>
				) : (
					<iframe
						src="/"
						title="Portfolio website"
						style={{ maxWidth: "100%", height: "720px" }}
					></iframe>
				)}
				<p>
					Warning: Potential infinite recursion. If you experience any of the
					following symptoms please click{" "}
					<Link onClick={clickHandler}>here</Link>
					<ul>
						<li>Headache</li>
						<li>Nausea</li>
						<li>Dizziness</li>
						<li>Death</li>
					</ul>
				</p>
				<ExtLink to="https://github.com/RKirkpatrick/rkirkpatrick.github.io">
					Portfolio Website Github
				</ExtLink>
			</article>
		</>
	);
};

export default Portfolio;
