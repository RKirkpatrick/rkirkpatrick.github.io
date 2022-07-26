import { ExtLink } from "../Common/ExtLink";
import { Video } from "../Common/Video";

const CS46X = ({ title }) => {
	return (
		<>
			<article>
				<h1>{title}</h1>
				<h4>MMO stands for massively multiplayer online</h4>
			</article>
			<article>
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
			</article>
			<article>
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
			<article>
				<h2>Prototype</h2>
				Game Engine: <ExtLink to="https://unity.com/">Unity</ExtLink>
				<br />
				Multiplayer Networking:{" "}
				<ExtLink to="https://www.photonengine.com/en-US/PUN">
					Photon PUN
				</ExtLink>
				<br />
				Platform: WebGL
				<br />
				<ExtLink to="https://github.com/Kirkpary/CS461MMO-Expo">
					Unity Source Code
				</ExtLink>
				<br />
				<ExtLink to="https://kirkpary.github.io/MMO-Expo/prototype/">
					Functional Prototype
				</ExtLink>
				<br />
				<ExtLink to="https://events.engineering.oregonstate.edu/expo2021/project/mmo-expo-improve-experience-attending-virtual-expositions">
					Oregon State Engineering Virtual Expo Page
				</ExtLink>
			</article>
			<article>
				<h2>Demo</h2>
				<Video src="https://youtube.com/embed/UKVIImTqL40" />
			</article>
			<article>
				<h2>My Contributions</h2>
				<ul>
					<li>Photon Networking</li>
					<li>Photon Chat</li>
					<li>
						World Generation using{" "}
						<ExtLink to="https://www.world-machine.com/">World Machine</ExtLink>
					</li>
					<li>
						Modifying the JSON file import to work for the lobby and booths
					</li>
					<li>
						Scaling the UI to be more uniform on different resolutions
						(Responsive UI)
					</li>
					<li>Reviewed every pull request and helped with bug fixes</li>
				</ul>
			</article>
			<article>
				<h2>Team Members</h2>
				<ul>
					<li>
						<ExtLink to="https://github.com/Min-Chew">Min Chew</ExtLink>
					</li>
					<li>
						<ExtLink to="https://github.com/Samuel-Fox">Samuel Fox</ExtLink>
					</li>
					<li>
						<ExtLink to="https://github.com/zexianli">Zexian Li</ExtLink>
					</li>
				</ul>
			</article>
		</>
	);
};

export default CS46X;
