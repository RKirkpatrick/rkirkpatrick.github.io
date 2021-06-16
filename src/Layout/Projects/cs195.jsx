import React from "react";
import { ExtLink } from "../Common/ExtLink";
import Masonry from "../Common/Masonry";

const CS195 = ({ title }) => {
	const imagePath = "/img/cs195/";
	const aboutmeImages = [
		{
			lowRes: "about-640w-min.png",
			hiRes: "about-1280w-min.png",
			description: "Screenshot of About Me Website",
			author: process.env.REACT_APP_AUTHOR,
			year: 2020,
		},
	];
	const ghostrealmImages = [
		{
			lowRes: "news-ghostrealm-640w-min.png",
			hiRes: "news-ghostrealm-1280w-min.png",
			description: "Screenshot of the News page on the Ghostrealm Website",
			author: process.env.REACT_APP_AUTHOR,
			year: 2020,
		},
		{
			lowRes: "games-ghostrealm-640w-min.png",
			hiRes: "games-ghostrealm-1280w-min.png",
			description:
				"Screenshot of the Earth's Last Hope Games page on the Ghostrealm Website",
			author: process.env.REACT_APP_AUTHOR,
			year: 2020,
		},
		{
			lowRes: "about-ghostrealm-640w-min.png",
			hiRes: "about-ghostrealm-1280w-min.png",
			description: "Screenshot of the About page on the Ghostrealm Website",
			author: process.env.REACT_APP_AUTHOR,
			year: 2020,
		},
	];

	return (
		<>
			<article className="boxshadow">
				<h1>{title} Projects</h1>
			</article>
			<article className="boxshadow">
				<h2>About Me Website</h2>
				<ExtLink to="http://web.engr.oregonstate.edu/~kirkpary/cs195/about/">
					Link to website
				</ExtLink>
				<h3>Description</h3>
				<p>
					For the first 6 weeks of the term we were working on our about me
					website. This project had strict requirements. The only things we
					could change were the website background, text descriptions, images,
					and colors but we had to have at least five different colors.
				</p>
				<h3>Gallery</h3>
				<Masonry path={imagePath} images={aboutmeImages} />
			</article>
			<article className="boxshadow">
				<h2>Ghostrealm Website</h2>
				<ExtLink to="http://web.engr.oregonstate.edu/~kirkpary/cs195/ghostrealm/">
					Link to website
				</ExtLink>
				<h3>Description</h3>
				<p>
					The final project for Web Design was to design our own website. This
					time there were less strict requirements. I decided to make a website
					for the game I wanted to make with my friend.
				</p>
				<h3>Gallery</h3>
				<Masonry path={imagePath} images={ghostrealmImages} />
			</article>
		</>
	);
};

export default CS195;
