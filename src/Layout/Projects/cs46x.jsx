import { Link } from "react-router-dom";
import { Video } from "../Common/Video";

//TODO add demo videos
const CS46X = ({ title }) => {
	return (
		<>
			<article className="boxshadow">
				<h1>{title}</h1>
				<h4>MMO stands for massively multiplayer online</h4>
			</article>
			<article className="boxshadow">
				<h2>Project Description</h2>
				<p>
					Our project, MMO Expo is designed to emulate the experience of a real
					world expo while maintaining the benefits of a virtual expo. Regular
					virtual expos lack the interactivity between visitors and real world
					expos require visitors that are far away to spend lots of money to
					travel. We emulate the real world expo by allowing users to walk
					around to different booths and chat with booth attendants and other
					expo visitors. We maintain the benefits of a virtual expo by adding a
					search and teleport feature so the user can search for the booth they
					are looking for and instantly teleport to it by clicking on it in the
					search.
				</p>
				<h2>Demo</h2>
				<Video src="https://youtube.com/embed/UKVIImTqL40" />
			</article>
			<article className="boxshadow">
				<h2>Features</h2>
				<h3>General Features</h3>
				<ul>
					<li>
						Can run on any device with a web browser. Touch screen only devices
						aren't supported yet.
					</li>
					<li>Multiplayer</li>
					<li>
						Text chat
						<ul>
							<li>Chat channel for current room</li>
							<li>Chat for closest booth within range</li>
							<li>
								Users can create their own chat channels for group messaging
							</li>
							<li>Direct messaging</li>
						</ul>
					</li>
					<li>
						View booth info
						<ul>
							<li>Title</li>
							<li>Poster</li>
							<li>Description</li>
							<li>Zoom link</li>
						</ul>
					</li>
					<li>Booth search with teleport</li>
					<li>Lobby to select world using portals</li>
					<li>Use click, arrow key, or wasd for character movement.</li>
				</ul>
				<h3>Admin Features</h3>
				<ul>
					<li>Booth list can be customized using JSON files</li>
					<li>World list can be customized using JSON files</li>
					<li>World environment selection using JSON files</li>
				</ul>
			</article>
			<article className="boxshadow">
				<h2>Prototype</h2>
				Game Engine:{" "}
				<Link to="https://unity.com/" target="_blank">
					Unity
				</Link>
				<br />
				Multiplayer Networking:{" "}
				<Link to="https://www.photonengine.com/en-US/PUN" target="_blank">
					Photon PUN
				</Link>
				<br />
				Platform: WebGL
				<br />
				<Link to="https://github.com/Kirkpary/CS461MMO-Expo" target="_blank">
					Unity Source Code
				</Link>
				<br />
				<Link
					to="https://kirkpary.github.io/CS461MMO-Expo/prototype/"
					target="_blank"
				>
					Functional Prototype
				</Link>
			</article>
			<article className="boxshadow">
				<h2>My Contributions</h2>
				<ul>
					<li>Photon Networking</li>
					<li>Photon Chat</li>
					<li>
						World Generation using{" "}
						<Link to="https://www.world-machine.com/" target="_blank">
							World Machine
						</Link>
					</li>
					<li>
						Part of setting up the JSON file import for the lobby and booths
					</li>
					<li>
						Fixing the UI to be more uniform on different resolutions
						(Responsive UI)
					</li>
					<li>Reviewed every pull request and helped with bug fixes</li>
				</ul>
			</article>
			<article className="boxshadow">
				<h2>Team Members</h2>
				<ul>
					<li>
						<Link to="https://github.com/Min-Chew" target="_blank">
							Min Chew
						</Link>
					</li>
					<li>
						<Link to="https://github.com/Samuel-Fox" target="_blank">
							Samuel Fox
						</Link>
					</li>
					<li>
						<Link to="https://github.com/zexianli" target="_blank">
							Zexian Li
						</Link>
					</li>
				</ul>
			</article>
		</>
	);
};

export default CS46X;
