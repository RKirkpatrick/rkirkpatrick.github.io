import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./GithubCard.css";
import GithubColors from "./GithubColors.json";
import { ExtLink } from "./ExtLink.jsx";

const GithubCard = ({
	user,
	repo,
	url = "",
	extUrl = `https://github.com/${user}/${repo}`,
	className,
}) => {
	const [stars, setStars] = useState(null);
	const [forks, setForks] = useState(null);
	const [description, setDescription] = useState("");
	const [language, setLanguage] = useState("");
	const [parent, setParent] = useState("");

	useEffect(() => {
		fetch(`https://api.github.com/repos/${user}/${repo}`)
			.then((res) => {
				return res.json();
			})
			.then((data) => {
				setStars(data.stargazers_count);
				setForks(data.forks_count);
				setDescription(data.description);
				setLanguage(data.language);
				setParent(data.parent?.full_name);
			});
	}, [repo, user]);

	return (
		<div className={`github-card ${className}`}>
			{url ? (
				<Link to={url} className="overlay"></Link>
			) : (
				<ExtLink to={extUrl} className="overlay"></ExtLink>
			)}

			<div className="inner">
				<h3>{repo}</h3>
				<p>{parent ? `Forked from ${parent}` : <br />}</p>
				<p>{description ? description : <br />}</p>
				{language && (
					<span className="github-card__meta">
						<span
							className="github-card__language-icon"
							style={{ backgroundColor: `${GithubColors[language].color}` }}
						></span>{" "}
						{language}
					</span>
				)}
				<span className="github-card__meta inner">
					<i className="fa fa-star" aria-hidden="true"></i>
					{stars !== null ? (
						stars
					) : (
						<i className="fa fa-spinner" aria-hidden="true"></i>
					)}
				</span>
				<span className="github-card__meta">
					<i className="fa fa-code-fork" aria-hidden="true"></i>
					{forks !== null ? (
						forks
					) : (
						<i className="fa fa-spinner" aria-hidden="true"></i>
					)}
				</span>
				{!url && (
					<span className="github-card__ext-link">
						<i className="fa fa-external-link"></i>
					</span>
				)}
			</div>
		</div>
	);
};

export default GithubCard;
