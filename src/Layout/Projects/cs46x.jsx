//TODO add demo videos
const CS46X = ({ title }) => {
	return (
		<>
			<article class="boxshadow">
				<h1>{title}: MMO Expo</h1>
				<h4>MMO stands for massively multiplayer online</h4>
			</article>
			<article class="boxshadow">
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
			<article class="boxshadow">
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
			<article class="boxshadow">
				<h2>Prototype</h2>
				Game Engine:{" "}
				<a href="https://unity.com/" target="_blank" rel="noopener noreferrer">
					Unity
				</a>
				<br />
				Multiplayer Networking:{" "}
				<a
					href="https://www.photonengine.com/en-US/PUN"
					target="_blank"
					rel="noopener noreferrer"
				>
					Photon PUN
				</a>
				<br />
				Platform: WebGL
				<br />
				<a
					href="https://github.com/Kirkpary/CS461MMO-Expo"
					target="_blank"
					rel="noopener noreferrer"
				>
					Unity Source Code
				</a>
				<br />
				<a
					href="https://kirkpary.github.io/CS461MMO-Expo/prototype/"
					target="_blank"
					rel="noopener noreferrer"
				>
					Functional Prototype
				</a>
			</article>
			<article class="boxshadow">
				<h2>My Contributions</h2>
				<ul>
					<li>Photon Networking</li>
					<li>Photon Chat</li>
					<li>
						World Generation using{" "}
						<a
							href="https://www.world-machine.com/"
							target="_blank"
							rel="noopener noreferrer"
						>
							World Machine
						</a>
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
			<article class="boxshadow">
				<h2>Team Members</h2>
				<ul>
					<li>
						<a
							href="https://github.com/Min-Chew"
							target="_blank"
							rel="noopener noreferrer"
						>
							Min Chew
						</a>
					</li>
					<li>
						<a
							href="https://github.com/Samuel-Fox"
							target="_blank"
							rel="noopener noreferrer"
						>
							Samuel Fox
						</a>
					</li>
					<li>
						<a
							href="https://github.com/zexianli"
							target="_blank"
							rel="noopener noreferrer"
						>
							Zexian Li
						</a>
					</li>
				</ul>
			</article>{" "}
		</>
	);
};

export default CS46X;
