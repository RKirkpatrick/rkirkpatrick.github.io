import { ExtLink } from "../Common/ExtLink";

const Raedam = ({ title }) => {
	return (
		<>
			<article className="boxshadow">
				<h1>{title}</h1>
			</article>
			<article className="boxshadow">
				<h2>Description</h2>
				<p>
					The sensor management website was made for managing parking sensors
					and viewing sensor data. For the back-end we used Firebase for hosting
					and Firestore for the database. We used React.js, Bootstrap, and some
					custom css for the front-end.
				</p>
			</article>
			<article className="boxshadow">
				<h3>Live Demo</h3>
				<p>
					Guest Email: guest@ryankirkpatrick.net
					<br />
					Guest Password: guest1234
					<br />
					<ExtLink to="https://parking.ryankirkpatrick.net">Demo link</ExtLink>
					<iframe
						src="https://parking.ryankirkpatrick.net"
						title="Portfolio website"
						style={{ maxWidth: "100%", height: "80vh" }}
					></iframe>
				</p>
			</article>
			<article className="boxshadow">
				<h3>Source Code</h3>
				<p>
					<ExtLink to="https://github.com/RKirkpatrick/Generic-Sensor-Display">
						Live Demo Github
					</ExtLink>
					<br />
					<ExtLink to="https://github.com/raedamco/Software">
						Raedam Github
					</ExtLink>
				</p>
			</article>
			<article className="boxshadow">
				<h2>Team Members</h2>
				<ul>
					<li>
						<ExtLink to="https://austinmckee.net/home">Austin Mckee</ExtLink>
					</li>
				</ul>
			</article>
		</>
	);
};

export default Raedam;
