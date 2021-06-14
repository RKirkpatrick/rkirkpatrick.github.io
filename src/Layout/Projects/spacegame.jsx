import { Image } from "../Common/Masonry";

const spacegame = ({ title }) => {
	const imagePath = "/img/elh/";
	const spacegameImages = [
		{
			lowRes: "elh-main-menu.jpg",
			hiRes: "elh-main-menu-720.jpg",
			description: "Main Menu",
			author: process.env.REACT_APP_AUTHOR,
			year: 2018,
		},
		{
			lowRes: "elh-main.jpg",
			hiRes: "elh-main-720.jpg",
			description: "Spaceship floating through asteroids",
			author: process.env.REACT_APP_AUTHOR,
			year: 2018,
		},
		{
			lowRes: "elh-big-map.jpg",
			hiRes: "elh-big-map-720.jpg",
			description: "Large map view of all the asteroids",
			author: process.env.REACT_APP_AUTHOR,
			year: 2018,
		},
		{
			lowRes: "elh-inventory-menu.jpg",
			hiRes: "elh-inventory-menu-720.jpg",
			description: "Inventory with storage, crafting, and refining",
			author: process.env.REACT_APP_AUTHOR,
			year: 2018,
		},
	];

	return (
		<>
			<article className="boxshadow">
				<h1>{title}</h1>
			</article>
			<article className="boxshadow">
				<h2>Description</h2>
				<p id="description">
					Earth's Last Hope is set in the future when Earth is running low on
					resources. You have been sent out in your spaceship to gather
					resources from asteroids and potentially find a new planet to inhabit.
				</p>
				<h2>History</h2>
				<p>
					The project started during my senior year in high school as an{" "}
					<a
						href="https://tms.ogpc.info/Games/Details/cf872406-07d4-41da-9303-76d52da18a17"
						target="_blank"
						rel="noopener noreferrer"
					>
						OGPC Entry
					</a>
					. The project started during my senior year in high school as an OGPC
					Entry. We decided to use Gamemaker 8.0 because it was something that
					everyone on the team was used to but we decided to not use any drag
					and drop features and only use code. After the competition ended a few
					of us wanted to keep working on the game. I continued with the
					GameMaker 8.0 version of the game over the summer trying to implement
					infinite rooms by locking the player in the center of the room. Near
					the end of the summer, there was a sale on GameMaker Studio 1.4, so I
					started porting the game over. Due to problems with the physics engine
					and locking the player in the center of the room, I didn’t end up
					finishing the Gamemaker port. I eventually decided to port the game to
					Unity because it has infinite scenes. Most of the code had to be
					rewritten for the Unity port and it’s still a work in progress.
				</p>
				<h2>Gallery</h2>
				<br className="clear" />
				<div className="masonry">
					{spacegameImages.map((image, index) => {
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
			</article>{" "}
		</>
	);
};

export default spacegame;
