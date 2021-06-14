import ExtLink from "../Partials/ExternalLink";
import { Image } from "../Partials/Masonry";

const CS362 = ({ title }) => {
	const imagePath = "/img/cs362/";
	const pythonImages = [];

	return (
		<>
			<article className="boxshadow">
				<h1>{title}</h1>
			</article>
			<article className="boxshadow">
				<h2>Group Testing Project</h2>
				<ExtLink href="https://github.com/alexuong/free-python-games">
					Github
				</ExtLink>
				<h3>Description</h3>
				<p></p>
				<h3>Gallery</h3>
				<br className="clear" />
				<div hidden className="masonry">
					{pythonImages.map((image, index) => {
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

export default CS362;
