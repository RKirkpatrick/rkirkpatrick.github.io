import { ExtLink } from "../Common/ExtLink";

//TODO add images
const CS492 = ({ title }) => {
	return (
		<>
			<p className="warning aligncenter">
				This page is under construction: Missing Information.
			</p>
			<article>
				<h1>{title}</h1>
			</article>
			<article>
				<h2>Assignment 1</h2>
				<h3>Assignment Description</h3>
				<ol>
					<li>
						Write a basic app to display dummy weather data
						<ul>
							<li>
								Setup a recyclerview to display the weather forecast data in a
								vertical list.
							</li>
						</ul>
					</li>
					<li>
						Handle user clicks on items in the weather list
						<ul>
							<li>
								Display a toast when the user clicks on a list item that
								displays detailed weather data for that day.
							</li>
						</ul>
					</li>
				</ol>
				<h3>Gallery</h3>
			</article>
			<article>
				<h2>Assignment 2</h2>
				<h3>Description</h3>
				<ol>
					<li>
						Hook your app up to the OpenWeatherMap API
						<ol>
							<li>Sign-up for OpenWeatherMap API key.</li>
							<li>
								Build a URL query for the OpenWeatherMap 5 day forcast API using
								a specified city name.
							</li>
							<li>
								Write a subclass of AsyncTask taht uses a URL from the method
								you just worte to get forecast data from OpenWeatherMap to
								display.
							</li>
							<li>Load data when the app starts.</li>
							<li>
								Write a utility method to parse the JSON data from
								OpenWeatherMap into a list of strings.
							</li>
						</ol>
					</li>
					<li>
						Use an Intent to start a new activity
						<ol>
							<li>
								Implement a new activity to represent the "detailed" view of the
								forecast.
							</li>
							<li>Add an entry in AndroidManifest.xml for the new activity.</li>
							<li>
								Change the click on items to launche the new activity for
								individual forecasts
							</li>
						</ol>
					</li>
					<li>
						Add some implicit intents
						<ol>
							<li>
								Add an action to the action bar that allows the user to see the
								location on a map.
							</li>
							<li>
								Add an action that allows the user to share the "detailed"
								forecast text.
							</li>
						</ol>
					</li>
				</ol>
				<h3>Gallery</h3>
			</article>
			<article>
				<h2>Assignment 3</h2>
				<h3>Description</h3>
				<p></p>
				<h3>Gallery</h3>
			</article>
			<article>
				<h2>Assignment 4</h2>
				<h3>Description</h3>
				<p></p>
				<h3>Gallery</h3>
			</article>
			<article>
				<h2>Final Group Project</h2>
				<ExtLink to="https://github.com/osu-cs492-w20/final-project-kekweirdchamp">
					Github
				</ExtLink>
				<h3>Description</h3>
				<p></p>
				<h3>Gallery</h3>
			</article>
		</>
	);
};

export default CS492;
