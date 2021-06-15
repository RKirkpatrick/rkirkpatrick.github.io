import { Video } from "../Common/Video";

//TODO add descriptions
const CS450 = ({ title }) => {
	return (
		<>
			<article className="boxshadow">
				<h1>{title}</h1>
			</article>
			<article className="boxshadow">
				<h2>Project 1: Draw Something Cool in 3D!</h2>
				<Video src="https://www.youtube.com/embed/EEq8wDssY1M"></Video>
			</article>
			<article className="boxshadow">
				<h2>Project 2: Animate a Helicopter</h2>
				<Video src="https://www.youtube.com/embed/gqv9Tc0DKiA"></Video>
			</article>
			<article className="boxshadow">
				<h2>Project 3: Texture Mapping</h2>
				<Video src="https://www.youtube.com/embed/naNb-v8QXrU"></Video>
			</article>
			<article className="boxshadow">
				<h2>Project 4: Lighting</h2>
				<Video src="https://www.youtube.com/embed/-cDCNdyYmC0"></Video>
			</article>
			<article className="boxshadow">
				<h2>Project 5: Shaders</h2>
				<Video src="https://www.youtube.com/embed/QFkA0UwyyGE"></Video>
			</article>
			<article className="boxshadow">
				<h2>Project 6: Geometric Modeling</h2>
				<Video src="https://www.youtube.com/embed/BcueSw67yII"></Video>
			</article>
			<article className="boxshadow">
				<h2>Final Project: Solar System</h2>
				<Video src="https://www.youtube.com/embed/bKyKuPJmOFw"></Video>
			</article>
		</>
	);
};

export default CS450;
