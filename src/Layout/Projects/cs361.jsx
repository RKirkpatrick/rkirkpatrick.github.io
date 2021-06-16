import { ExtLink } from "../Common/ExtLink";
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
						<ExtLink to="https://github.com/zschaefle" target="_blank">
							Zakiah Schaefle
						</ExtLink>
					</li>
					<li>
						<ExtLink to="https://github.com/HanJiang915" target="_blank">
							Han Jiang
						</ExtLink>
					</li>
					<li>
						<ExtLink to="https://github.com/baixi-cs" target="_blank">
							Xiaoqin Bai
						</ExtLink>
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
				<p>
					For Sprint 1, your team is tasked with creating a proof of concept
					demo of a card game called Aces Up using ninja framework.
				</p>
				<p>The rules for Aces Up are here: Note: Aces are high.</p>
				<ul>
					<li>Deal four cards in a row face up.</li>
					<li>
						If there are two or more cards of the same suit, discard all but the
						highest-ranked card of that suit.
					</li>
					<li>
						Repeat step 2 until there are no more pairs of cards with the same
						suit.
					</li>
					<li>
						Whenever there are any empty spaces, you may choose the top card of
						another pile to be put into the empty space. After you do this, go
						to Step 2.
					</li>
					<li>
						When there are no more cards to move or remove, deal out the next
						four cards from the deck face-up onto each pile.
					</li>
					<li>
						Repeat Step 2, using only the visible (top) cards on each of the
						four piles.
					</li>
					<li>
						When the last four cards have been dealt out and any moves made, the
						game is over. The fewer cards left in the tableau, the better. To
						win is to have only the four aces left.
					</li>
				</ul>
				<p>
					When the game ends, the number of discarded cards is your score. The
					maximum score (and thus the score necessary to win) is 48, which means
					all cards have been discarded except for the four aces, thus the name
					of the game.
				</p>
				<p>
					The rules of the game are from{" "}
					<ExtLink to="https://en.wikipedia.org/wiki/Aces_Up" target="_blank">
						here
					</ExtLink>
					.
				</p>
				<p>
					You can also play online{" "}
					<ExtLink to="https://en.wikipedia.org/wiki/Aces_Up" target="_blank">
						here
					</ExtLink>
					.
				</p>
				<p>
					Your boss wants to know if it is possible to implement this game using
					the{" "}
					<ExtLink to="http://www.ninjaframework.org/" target="_blank">
						ninja framework
					</ExtLink>
					. You will have ~1 week to implement this game. Since this is just a
					proof of concept, we will not be developing an extensive UI at this
					time.
				</p>
				<h3>Sprint 2: Description</h3>
				<p>
					For Sprint 2, you and your team are charged with creating a more
					usable version of Aces Up.
				</p>
				<p>
					After the first version (Sprint 1) was released, we conducted focus
					group testing and found that users were complaining about the game
					interface being unusable. As a team, you have been tasked with
					creating a more usable interface (View) for the next version.
				</p>
				<h3>Sprint 3: Description</h3>
				<p>
					For Sprint 3, you and your group must refactor the code behind the
					AcesUp game.
				</p>
				<p>
					After the second version (Sprint 2) was released, user reviews showed
					that they really liked the improved UI. However, now that the game has
					become popular, the marketing department has begun pushing for
					additional features and expansions to the game. These types of changes
					require that the underlying architecture be updated and refactored in
					preparation. Since the marketing department is impatient, they pushed
					hard and the following new feature was also added to the development
					timeline this sprint:
					<ul>
						<li>
							Implement the regular AcesUp rules, but include a new rule that
							only the Ace cards can be moved into empty piles (except during
							the initial deal that starts the game).
						</li>
					</ul>
				</p>
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
