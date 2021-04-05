import React from 'react';

const CS195 = () => {
	return (
		<>
			<article className="boxshadow">
				<h1>CS 195: Web Design Projects</h1>
			</article>
			<article className="boxshadow">
				<h2>About Me Website</h2>
				<a href="http://web.engr.oregonstate.edu/~kirkpary/cs195/about/" target="_blank" rel="noopener noreferrer">Link to website</a>
				<h3>Description</h3>
				<p>For the first 6 weeks of the term we were working on our about me website. This project had strict requirements. The only things we could change were the website background, text descriptions, images, and colors but we had to have at least five different colors.</p>
				<h3>Gallery</h3>
				<br className="clear"/>
				<div  className="masonry">
					<a href="/img/cs195/about-640w-min.png" target="_blank" rel="noopener noreferrer">
						<img src="/img/cs195/about-1280w-min.png"
							alt="Screenshot of About Me Website"
							title={"\u00A9 " + process.env.REACT_APP_AUTHOR + " 2020"}
							className="caption"
						/>
					</a>
				</div>
				<br className="clear"/>
			</article>
			<article className="boxshadow">
				<h2>Ghostrealm Website</h2>
				<a href="http://web.engr.oregonstate.edu/~kirkpary/cs195/ghostrealm/" target="_blank" rel="noopener noreferrer">Link to website</a>
				<h3>Description</h3>
				<p>The final project for Web Design was to design our own website. This time there were less strict requirements. I decided to make a website for the game I wanted to make with my friend.</p>
				<h3>Gallery</h3>
				<br className="clear"/>
				<div  className="masonry">
					<a href="/img/cs195/news-ghostrealm-640w-min.png" target="_blank" rel="noopener noreferrer">
						<img src="/img/cs195/news-ghostrealm-1280w-min.png"
							alt="Screenshot of the News page on the Ghostrealm Website"
							title={"\u00A9 " + process.env.REACT_APP_AUTHOR + " 2020"}
							className="caption"
						/>
					</a>
					<a href="/img/cs195/games-ghostrealm-640w-min.png" target="_blank" rel="noopener noreferrer">
						<img src="/img/cs195/games-ghostrealm-1280w-min.png"
							alt="Screenshot of the Earth's Last Hope Games page on the Ghostrealm Website"
							title={"\u00A9 " + process.env.REACT_APP_AUTHOR + " 2020"}
							className="caption"
						/>
					</a>
					<a href="/img/cs195/about-ghostrealm-640w-min.png" target="_blank" rel="noopener noreferrer">
						<img src="/img/cs195/about-ghostrealm-1280w-min.png"
							alt="Screenshot of the About page on the Ghostrealm Website"
							title={"\u00A9 " + process.env.REACT_APP_AUTHOR + " 2020"}
							className="caption"
						/>
					</a>
				</div>
				<br className="clear"/>
			</article>
		</>
	);
}
 
export default CS195;