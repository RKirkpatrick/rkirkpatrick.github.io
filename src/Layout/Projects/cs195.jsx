import React from "react";
import { Image } from "../Partials/Masonry";

const CS195 = () => {
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
				<h1>CS 195: Web Design Projects</h1>
			</article>
			<article className="boxshadow">
				<h2>About Me Website</h2>
				<a
					href="http://web.engr.oregonstate.edu/~kirkpary/cs195/about/"
					target="_blank"
					rel="noopener noreferrer"
				>
					Link to website
				</a>
				<h3>Description</h3>
				<p>
					For the first 6 weeks of the term we were working on our about me
					website. This project had strict requirements. The only things we
					could change were the website background, text descriptions, images,
					and colors but we had to have at least five different colors.
				</p>
				<h3>Gallery</h3>
				<br className="clear" />
				<div className="masonry">
					{aboutmeImages.map((image, index) => {
						return (
							<Image
								key={index}
								path={imagePath}
								lowRes={image.lowRes}
								highRes={image.hiRes}
								description={image.description}
								author={image.author}
								year={image.year}
							/>
						);
					})}
				</div>
				<br className="clear" />
			</article>
			<article className="boxshadow">
				<h2>Ghostrealm Website</h2>
				<a
					href="http://web.engr.oregonstate.edu/~kirkpary/cs195/ghostrealm/"
					target="_blank"
					rel="noopener noreferrer"
				>
					Link to website
				</a>
				<h3>Description</h3>
				<p>
					The final project for Web Design was to design our own website. This
					time there were less strict requirements. I decided to make a website
					for the game I wanted to make with my friend.
				</p>
				<h3>Gallery</h3>
				<br className="clear" />
				<div className="masonry">
					{ghostrealmImages.map((image, index) => {
						return (
							<Image
								key={index}
								path={imagePath}
								lowRes={image.lowRes}
								highRes={image.hiRes}
								description={image.description}
								author={image.author}
								year={image.year}
							/>
						);
					})}
				</div>
				<br className="clear" />
			</article>
		</>
	);
};

export default CS195;
