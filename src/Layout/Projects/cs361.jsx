import { Image } from "../Common/Masonry";

//TODO finish descriptions
const CS361 = ({ title }) => {
	const imagePath = "/img/cs361/";
	const acesupImages = [
		{
			lowRes: "start-acesup-720-min.png",
			hiRes: "start-acesup-720-min.png",
			description: "Aces Up new standard game",
			author: process.env.REACT_APP_AUTHOR,
			year: 2021,
		},
		{
			lowRes: "mid-acesup-720-min.png",
			hiRes: "mid-acesup-720-min.png",
			description: "Aces Up mid game",
			author: process.env.REACT_APP_AUTHOR,
			year: 2021,
		},
		{
			lowRes: "nearperfect-acesup-720-min.png",
			hiRes: "nearperfect-acesup-720-min.png",
			description: "Aces Up near perfect score",
			author: process.env.REACT_APP_AUTHOR,
			year: 2021,
		},
		{
			lowRes: "spanish-acesup-720-min.png",
			hiRes: "spanish-acesup-720-min.png",
			description: "Spanish Aces Up",
			author: process.env.REACT_APP_AUTHOR,
			year: 2021,
		},
	];

	return (
		<>
			<article className="boxshadow">
				<h1>{title}</h1>
			</article>
			<article className="boxshadow">
				<h2>Group Project</h2>
				<h3>Project Summary</h3>
				<p>
					Aces Up web based card game. Uses the Ninja Java web framework. Ninja
					is a full stack web framework. For this project we started with some
					starter code and had to refactor it so we can easily add new features.
				</p>
				<h3>Team Members</h3>
				<ul>
					<li>
						<a
							href="https://github.com/zschaefle"
							target="_blank"
							rel="noopener noreferrer"
						>
							Zakiah Schaefle
						</a>
					</li>
					<li>
						<a
							href="https://github.com/HanJiang915"
							target="_blank"
							rel="noopener noreferrer"
						>
							Han Jiang
						</a>
					</li>
					<li>
						<a
							href="https://github.com/baixi-cs"
							target="_blank"
							rel="noopener noreferrer"
						>
							Xiaoqin Bai
						</a>
					</li>
				</ul>
				<h3>Gallery</h3>
				<br className="clear" />
				<div className="masonry">
					{acesupImages.map((image, index) => {
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
				<h3>Sprint 1: Description</h3>
				<h3>Sprint 2: Description</h3>
				<h3>Sprint 3: Description</h3>
				<h3>Sprint 4: Description</h3>
				<p>
					For Sprint 4, the AcesUp game needs to be expanded to include a
					separate Spanish deck and ruleset version.
				</p>
				<p>
					Now that the refactoring of the underlying architecture is complete
					(Sprint 3), the marketing department is desperate to see new features
					added to the game. Market research has shown that users become bored
					with the regular AcesUp game after 2-3 weeks of use and are
					uninstalling the game after that. In order to keep those users engaged
					the marketing department wants to add another version of the AcesUp
					game as an additional feature. This new version should be added
					alongside the current version, so that users can select which version
					to play when the game is started. The marketing department selected
					the Spanish deck (Links to an external site.) for this new game, which
					includes the following changes to the current AcesUp game:
				</p>
				<ul>
					<li>
						<p>
							Spanish deck uses the following suits: bastos (clubs), oros
							(golden coins), copas (cups), and espadas (swords).
						</p>
					</li>
					<li>
						<p>
							Spanish deck contains 50 cards: nine ranked cards per suit (1-9),
							three face cards per suit (10-12), and 2 comodines cards (Jokers).
						</p>
					</li>
					<li>
						<p>
							The Joker cards are considered wild cards, which means they match
							with any suit and act as the highest valued card for that suit,
							which means you can remove any card from the top of a pile.
							However, once the Joker card has been matched with another card in
							the game, both cards are removed from the game.
						</p>
					</li>
					<li>
						<p>
							The standard deck in our AcesUp game contains 52 cards, which
							allows the game to guarantee that each deal will contain four
							cards (52/4 = 13 dealt sets of cards), but the Spanish deck
							contains 50 cards and will result in the last dealt set of cards
							having only two cards.
						</p>
					</li>
				</ul>
			</article>
		</>
	);
};

export default CS361;
