import { ExtLink } from "../Common/ExtLink";
import Masonry from "../Common/Masonry";

const CS362 = ({ title }) => {
	const imagePath = "/img/cs362/";
	const pythonImages = [];

	//TODO add images and description
	return (
		<>
			<article className="boxshadow">
				<h1>{title}</h1>
			</article>
			<article className="boxshadow">
				<h2>Group Testing Project</h2>
				<ExtLink to="https://github.com/alexuong/free-python-games">
					Github
				</ExtLink>
				<h3>Description</h3>
				<p></p>
				<h3>Gallery</h3>
				<Masonry path={imagePath} pythonImages={pythonImages} />
			</article>
		</>
	);
};

export default CS362;
