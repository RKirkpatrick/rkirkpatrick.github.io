import { ExtLink } from "../Common/ExtLink";
import Masonry from "../Common/Masonry";

const Raedam = ({ title }) => {
	const imagePath = "/img/raedam/";
	const sensorWebImages = [
		{
			lowRes: "Company-X-facilities-min.png",
			hiRes: "Company-X-facilities-min.png",
			description:
				"Parking structures or lots are listed on the home page with availability on the right.",
			author: process.env.REACT_APP_AUTHOR,
			year: 2022,
		},
		{
			lowRes: "Company-X-facilities-Parking-Structure-1-min.png",
			hiRes: "Company-X-facilities-Parking-Structure-1-min.png",
			description:
				"After clicking on an individual list item, the lot sub divisions are listed with availability.",
			author: process.env.REACT_APP_AUTHOR,
			year: 2022,
		},
		{
			lowRes: "Company-X-facilities-Parking-Structure-1-Floor-1-min.png",
			hiRes: "Company-X-facilities-Parking-Structure-1-Floor-1-min.png",
			description:
				"After clicking on a sub division, the individual parking spots are displayed in a map that shows which spots are available.",
			author: process.env.REACT_APP_AUTHOR,
			year: 2022,
		},
		{
			lowRes: "Company-X-facilities-Parking-Structure-1-Floor-1_edit-min.png",
			hiRes: "Company-X-facilities-Parking-Structure-1-Floor-1_edit-min.png",
			description:
				"Each spot can have it's type modified to set permit type and the sensor log displays occupancy information and timestamps.",
			author: process.env.REACT_APP_AUTHOR,
			year: 2022,
		},
		{
			lowRes: "Company-X-occupancy-min.png",
			hiRes: "Company-X-occupancy-min.png",
			description:
				"A line graph shows average occupancy and the heatmap shows the most used spots.",
			author: process.env.REACT_APP_AUTHOR,
			year: 2022,
		},
		{
			lowRes: "Company-X-organization-min.png",
			hiRes: "Company-X-organization-min.png",
			description:
				"Pricing can be edited in the organization settings per lot by day, hour, and minute.",
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
				</p>
				<h3>Images:</h3>
				<Masonry path={imagePath} images={sensorWebImages} />
				{/* <iframe
						src="https://parking.ryankirkpatrick.net"
						title="Portfolio website"
						style={{ maxWidth: "100%", height: "80vh" }}
					></iframe> */}
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
