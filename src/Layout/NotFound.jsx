import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

export default function NotFound() {
	return (
		<>
			<Helmet>
				<title>{`${process.env.REACT_APP_AUTHOR} - ${process.env.REACT_APP_SLOGAN}`}</title>
			</Helmet>
			<article className="alignmiddle boxshadow">
				<h1>Page Not Found</h1>
				<p>
					The page you were looking for doesn't exist. Return to the{" "}
					<Link to="/">Portfolio</Link>.
				</p>
			</article>
		</>
	);
}
