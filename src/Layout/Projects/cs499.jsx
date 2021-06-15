import { Video } from "../Common/Video";

//TODO add description
const CS499 = ({ title }) => {
	return (
		<>
			<article className="boxshadow">
				<h1>{title}</h1>
			</article>
			<article className="boxshadow">
				<h2>Final Project</h2>
				<h3>Description</h3>
				<p></p>
				<h3>Demo</h3>
				<Video src="https://youtube.com/embed/16EiS6TaYQc" />
			</article>
			<article className="boxshadow">
				<h2>Lab 5.1</h2>
				<h3>Description</h3>
				<p></p>
				<h3>Demo</h3>
				<Video src="https://youtube.com/embed/snqOA5bCXFw" />
			</article>
		</>
	);
};

export default CS499;
