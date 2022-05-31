import { ExtLink } from "../Common/ExtLink";
import Masonry from "../Common/Masonry";

const RaedamAbout = ({ title }) => {
	const imagePath = "/img/raedam/";
	const design3Images = [
		{
			lowRes: "client-design-3-min.png",
			hiRes: "client-design-3-min.png",
			description: "Third home page design for Raedam website",
			author: process.env.REACT_APP_AUTHOR,
			year: 2022,
		},
		{
			lowRes: "client-design-3-contact-min.png",
			hiRes: "client-design-3-contact-min.png",
			description: "Third contact page design for Raedam website",
			author: process.env.REACT_APP_AUTHOR,
			year: 2022,
		},
	];

	const design2Images = [
		{
			lowRes: "client-design-2-min.png",
			hiRes: "client-design-2-min.png",
			description: "Second home page design for Raedam website",
			author: process.env.REACT_APP_AUTHOR,
			year: 2022,
		},
		{
			lowRes: "client-design-2-contact-min.png",
			hiRes: "client-design-2-contact-min.png",
			description: "Second contact page design for Raedam website",
			author: process.env.REACT_APP_AUTHOR,
			year: 2022,
		},
	];

	const design1Images = [
		{
			lowRes: "client-design-1-min.png",
			hiRes: "client-design-1-min.png",
			description: "First home page design for Raedam website",
			author: process.env.REACT_APP_AUTHOR,
			year: 2022,
		},
		{
			lowRes: "client-design-1-contact-min.png",
			hiRes: "client-design-1-contact-min.png",
			description: "First contact page design for Raedam website",
			author: process.env.REACT_APP_AUTHOR,
			year: 2022,
		},
		{
			lowRes: "client-design-1-services-min.png",
			hiRes: "client-design-1-services-min.png",
			description: "First services page design for Raedam website",
			author: process.env.REACT_APP_AUTHOR,
			year: 2022,
		},
	];

	return (
		<>
			<article className="boxshadow">
				<h1>{title}</h1>
			</article>
			<article className="boxshadow">
				<h2>Design 3</h2>
				<h3>Description:</h3>
				<p>
					This design was created based on an html file I received from the
					graphic designer we contracted. I started with their design as a base,
					then I optimized it and converted it into a more responsive website.
				</p>
				<h3>Links:</h3>
				<uL>
					<li>
						<ExtLink to="https://client-design-3.web.app">Live demo</ExtLink>
					</li>
					<li>
						<ExtLink to="https://github.com/RKirkpatrick/Generic-Client-Website/tree/design-3">
							Github
						</ExtLink>
					</li>
				</uL>
				<h3>Images:</h3>
				<Masonry path={imagePath} images={design3Images} />
				{/* <iframe
					src="https://client-design-3.web.app"
					title="Raedam About Page Design 3"
					style={{ maxWidth: "100%", height: "720px" }}
				></iframe> */}
			</article>
			<article className="boxshadow">
				<h2>Design 2</h2>
				<h3>Description:</h3>
				<p>
					This design was a last minute change before an event. I was given this
					design as a pdf a few days before it needed to be completed. I spent
					the weekend trying to copy the design by eye. I was able to achieve a
					result that very closely matched the design and made it responsive and
					optimized.
				</p>
				<h3>Links:</h3>
				<uL>
					<li>
						<ExtLink to="https://client-design-2.web.app">Live demo</ExtLink>
					</li>
					<li>
						<ExtLink to="https://github.com/RKirkpatrick/Generic-Client-Website/tree/design-2">
							Github
						</ExtLink>
					</li>
				</uL>
				<h3>Images:</h3>
				<Masonry path={imagePath} images={design2Images} />
				{/* <iframe
					src="https://client-design-2.web.app"
					title="Raedam About Page Design 2"
					style={{ maxWidth: "100%", height: "720px" }}
				></iframe> */}
			</article>
			<article className="boxshadow">
				<h2>Design 1</h2>
				<h3>Description:</h3>
				<p>
					This is first design I worked on when I joined Raedam. It was
					originally done so we could cancel the Squarespace subscription and
					use the funds elsewhere. The design is based on the Squarespace
					website, however the html, css, and javascript was written from
					scratch to aid in future design changes.
				</p>
				<h3>Links:</h3>
				<uL>
					<li>
						<ExtLink to="https://client-design-1.web.app">Live demo</ExtLink>
					</li>
					<li>
						<ExtLink to="https://github.com/RKirkpatrick/Generic-Client-Website/tree/design-1">
							Github
						</ExtLink>
					</li>
				</uL>
				<h3>Images:</h3>
				<Masonry path={imagePath} images={design1Images} />
				{/* <iframe
					src="https://client-design-1.web.app"
					title="Raedam About Page Design 1"
					style={{ maxWidth: "100%", height: "720px" }}
				></iframe> */}
			</article>
		</>
	);
};

export default RaedamAbout;
