import ReactMarkdown from "react-markdown";
import { ExtLink } from "../Common/ExtLink";
const assignment3 = require("./");

const CS493 = ({ title }) => {
	return (
		<>
			<article className="boxshadow">
				<h1>{title}</h1>
			</article>
			<article className="boxshadow">
				<h2>Assignment 1</h2>
				<h3>Description</h3>
				<ol>
					<li>
						<h4>Design a RESTful API for a Yelp-like application</h4>
						<p>
							Your first task for this assignment is to design a RESTful API
							(i.e. API endpoints with corresponding request and response
							bodies) for a Yelp-like application. This application will
							specifically be centered around businesses and user reviews of
							businesses in US cities. The API you design should permit the
							following functionality:
						</p>
						<p>Businesses</p>
						<ul>
							<li>
								Users who own businesses should be able to add their businesses
								to the application. When a business owner adds their business
								they will need to include the following information:
								<ul>
									<li>Business name</li>
									<li>Business street address</li>
									<li>Business city</li>
									<li>Business state</li>
									<li>Business ZIP code</li>
									<li>Business phone number</li>
									<li>
										Business category and sub categories (e.g. category
										"Restaurant" and subcategory "Pizza")
									</li>
								</ul>
							</li>
							<li>
								The following information may also optionally be included when a
								new business is added:
								<ul>
									<li>Business website</li>
									<li>Business email</li>
								</ul>
							</li>
						</ul>
					</li>
					<li>
						<h4>Implement a server for your API</h4>
						<p>
							After you've designed your API, implement a server for it using
							Node.js and Express. Your server should meet the following
							requirements:
						</p>
						<ul>
							<li>
								Your server API should implement a route for each of the API
								endpoints in the design you created above.
							</li>
							<li>
								Any API endpoint with a parameterized route should perform basic
								verification of the specified route parameters. For example, if
								you have a route with a parameter representing the ID of a
								specific business, you should verify that the ID is valid.
							</li>
							<li>
								Any API endpoint that takes a request body should perform basic
								verification of the data provided in the request body. You
								example, if one of your endpoints requires a request body that
								contains a business name and a business address, you should
								verify that those two fields are present in the request body.
							</li>
							<li>
								Each API endpoint should respond with an appropriate HTTP status
								code and, when needed, a response body.
							</li>
							<li>
								API endpoints should have paginated responses where appropriate.
							</li>
							<li>
								Your server should run on the TCP port specified by the{" "}
								<code>PORT</code>
								environment variable.
							</li>
							<li>
								You should be able to launch your server using the command{" "}
								<code>npm start</code>.
							</li>
							<li>
								Importantly, DO NOT worry about actually storing API data in
								your server. When a client makes a request to your API that
								includes a request body (e.g. a business), you may simply
								validate the body without storing it. When a client makes a
								request to your API that would generate a response body, you can
								simply send back (hard-coded) dummy data with the appropriate
								format.
							</li>
						</ul>
					</li>
					<li>
						<h4>Write some basic tests for your server</h4>
						<p>
							Once your API server is implemented (or, preferably, as you're
							implementing your server), your next task is to implement some
							basic tests for your server. The test should demonstrate the
							functionality of all of the endpoints you implemented above. You
							may use any tool you like to write these tests (e.g. Postman,
							Insomnia, curl, etc.). So that the TA has these tests available
							when grading your assignment, you should commit and push a
							representation of these them to your assignment repository on
							GitHub (e.g. by exporting them from Postman or Insomnia or by
							writing and committing a shell script with curl commands).
						</p>
					</li>
				</ol>
			</article>
			<article className="boxshadow">
				<h2>Assignment 2</h2>
				<h3>Description</h3>
				<h4>Use a database to power your API</h4>
				<p>
					Your overarching goal for this assignment is to modify the API server
					to use a database to store the following resources:
				</p>
				<ul>
					<li>Businesses</li>
					<li>Reviews</li>
					<li>Photos</li>
				</ul>
				<p>
					You may choose either MySQL or MongoDB for this purpose (or another DB
					implementation you're interested in, with permission). Whichever
					database you choose, it should completely replace the starter code's
					existing JSON/in-memory storage for these resources. In other words,
					you should update all API endpoints in the original starter code to
					use your database.
				</p>
				<p>
					You should use the{" "}
					<ExtLink to="https://hub.docker.com/_/mysql/">
						official MySQL Docker image
					</ExtLink>{" "}
					or the{" "}
					<ExtLink to="https://hub.docker.com/_/mongo">
						official MongoDB Docker image
					</ExtLink>{" "}
					from Docker Hub to power your database. Whichever database you choose,
					your implementation should satisfy the criteria described below.
				</p>
				<h4>Database initialization</h4>
				<p>
					Before you run your application for the first time, you'll have to
					make sure your database is initialized and ready to store your
					application data. Use the mechanisms described below to initialize
					your database, so it's ready when you launch your app.
				</p>
				<p>
					<strong>MongoDB</strong>
				</p>
				<p>
					If you're using MongoDB, you should make sure to set the following
					environment variables when launching your database container:
				</p>
				<ul>
					<li>
						<code>MONGO_INITDB_ROOT_USERNAME</code> and{" "}
						<code>MONGO_INITDB_ROOT_USERNAME</code> - These are used to create
						the MongoDB <code>root</code> user.
					</li>
					<li>
						<code>MONGO_INITDB_DATABASE</code> - This specifies the name of a
						MongoDB database to be created when your container first starts.
					</li>
				</ul>
				<p>
					In addition, you'll have to make sure to create a lower-privileged
					user with access to the database you specify in{" "}
					<code>MONGO_INITDB_DATABASE</code>
					above. Because MongoDB generally uses a "create-on-first-use" approach
					and doesn't require a schema, you probably won't have to do any
					further initialization of your MongoDB database if you don't want to.
					However, it may still be helpful to store some initial data in your
					database, so your app has data to work with right away. The easiest
					way to do all this is to connect to your MongoDB server using the
					MongoDB shell and issue commands to create a user and add data to your
					database, similar to the way we did this in lecture.
				</p>
				<h4>Database organization</h4>
				<p>
					Your database should store all resource data (i.e. businesses, photos,
					and reviews) for the API. Because the resources you're working with
					are closely tied to each other (e.g. each review is tied to both a
					specific business and a specific user), you'll have to think carefully
					about how you organize and access them in your database. Some
					suggestions are included below for each database.
				</p>
				<strong>MongoDB</strong>
				<p>
					If you're using MongoDB, there are many valid ways to organize data in
					your database. For example, you could use three separate collections
					to store businesses, reviews, and photos. In this case, you can either
					use <code>$lookup</code> aggregation or multiple queries to gather
					data for a specific business (i.e. for the{" "}
					<code>GET /businesses/{"{id}"}</code> endpoint).
				</p>
				<p>
					Alternatively, you could store all photos and reviews as subdocuments
					of their corresponding business document. In this case, you'll likely
					want to use a projection to omit the photo and review data from
					businesses when returning a list of all businesses (i.e. from the{" "}
					<code>GET /businesses</code> endpoint). You'll also have to think
					carefully about how you find data for a specific user, e.g. a specific
					user's photos or reviews. Do do this, you can use subdocument array
					queries to select businesses with reviews/photos by the specified
					user, and then you can use some custom JS to select only matching
					reviews/photos from those businesses. Alternatively, you can use
					MongoDB's aggregation pipeline to structure a single query to fetch
					exactly the reviews/photos you're interested in.
				</p>
				<h4>Data persistence with a Docker volume</h4>
				<p>
					Whichever database you use, you should persist its data in a Docker
					volume (not a bind mount to a host directory). A Docker volume is a
					mechanism for persisting data created by a Docker container. You can
					think of them like portable disks that can be attached to Docker
					containers. You can find documentation on how Docker volumes work
					here:
				</p>
				<p>
					<ExtLink to="https://docs.docker.com/storage/volumes/">
						https://docs.docker.com/storage/volumes/
					</ExtLink>
				</p>
				<p>
					By default, MySQL stores data in the directory{" "}
					<code>/var/lib/mysql</code>, and MongoDB stores data in the directory
					<code>/data/db</code>. To persist data for your database, it should be
					sufficient to create a Docker volume (with{" "}
					<code>docker volume create</code>) and mount it at the appropriate one
					of these locations in your database container (using the{" "}
					<code>-v</code> option when launching the DB container).
				</p>
				<h4>API server setup</h4>
				<p>
					Your API server should read the location (i.e. hostname, port, and
					database name) and credentials (i.e. username and password) for your
					database from environment variables.
				</p>
			</article>
			<article className="boxshadow">
				<h2>Assignment 3</h2>
				<h3>Description</h3>
				<ReactMarkdown>
					{"## 1. Implement an API endpoint for creating new users\n" +
						"Your first task for this assignment is to implement an API endpoint to enable the creation and storage of application users.  Specifically, you should create a `POST /users` API endpoint through which new users can register.  When a user registers, they should provide their name, email address, and password, and you should salt and hash the password on the server before storing it.\n" +
						"\n\n" +
						"The DB initialization file in `db-init/` already creates a `users` table in which to store information about application users.  This table has the following columns, which correspond to the information you must store about the user:\n" +
						"  * `id` - User's integer ID (this is an `AUTO_INCREMENT` column)\n" +
						"  * `name` - User's full name\n" +
						"  * `email` - User's email address (which must be unique among all users)\n" +
						"  * `password` - User's hashed/salted password\n" +
						"  * `admin` - A boolean flag indicating whether the user has administrative permissions (`false` by default)\n" +
						"\n" +
						"## 2. Enable JWT-based user logins and implement a user data access endpoint\n" +
						"\n" +
						"Once you have enabled user registration for your application, implement a new `POST /users/login` API endpoint that allows a registered user to log in by sending their email address and password.  If the email/password combination is valid, you should respond with a JWT token, which the user can then send with future requests to authenticate themselves.  The JWT token payload should contain the user's ID (with which you should be able to fetch details about the user from the database) and any other information needed to implement the features described in this assignment, and it should expire after 24 hours.\n" +
						"\n" +
						"If a user attempts to log in with an invalid username or password, you should respond with a 401 error.\n" +
						"\n" +
						"In addition, you should create a `GET /users/{userId}` API endpoint that returns information about the specified user (excluding their password).\n" +
						"\n" +
						"Importantly, note that the DB init script in `db-init/` creates several users with passwords that are pre-hashed/salted.  The plaintext password for all of these users is `hunter2`.\n" +
						"\n" +
						"## 3. Require authorization to perform certain API actions\n" +
						"\n" +
						"Once users can log in, modify your API so that it requires clients to authenticate users to implement the following authorization scheme:\n" +
						"  * Only an authorized user can see their own user data and their own lists of businesses, reviews, and photos.  In other words, the following API endpoints should verify that the `userId` specified in the URL path matches the ID of the logged-in user (as indicated by a valid JWT provided by the client):\n" +
						"    * `GET /users/{userId}`\n" +
						"    * `GET /users/{userId}/businesses`\n" +
						"    * `GET /users/{userId}/photos`\n" +
						"    * `GET /users/{userId}/reviews`\n" +
						"\n" +
						"  * Only an authorized user can create new businesses, reviews, and photos.  In other words, the following API endpoints must ensure that a user is logged in and that the user ID specified in the POST request body matches the ID of the logged-in user:\n" +
						"    * `POST /businesses`\n" +
						"    * `POST /photos`\n" +
						"    * `POST /reviews`\n" +
						"\n" +
						"  * Only an authorized user can modify or delete their own businesses, reviews, and photos.  In other words, the following API endpoints must ensure that a user is logged in and that the user ID for the entity being modified/deleted matches the ID of the logged-in user:\n" +
						"    * `PUT /businesses`, `DELETE /businesses`\n" +
						"    * `PUT /photos`, `DELETE /photos`\n" +
						"    * `PUT /reviews`, `DELETE /reviews`\n" +
						"\n" +
						"  * A user with `admin` permissions may perform any action, including creating content or fetching/modifying/deleting the content of any user.\n" +
						"\n" +
						"  * Only a user with `admin` permissions may create other `admin` users.\n" +
						"    * Note that there is currently one admin user specified in the DB init script in `db-init/`.  They have email address `admin@businesses.com` and password `hunter2`.\n" +
						"\n" +
						"All authorized endpoints should respond with an error if the logged-in user is not authorized or if no user is logged in (i.e. no JWT is provided)."}
				</ReactMarkdown>
				<ol>
					<li>
						<h4></h4>
					</li>
				</ol>
			</article>
			<article className="boxshadow">
				<h2>Assignment 4</h2>
				<h3>Description</h3>
				<ol>
					<li>
						<h4></h4>
					</li>
				</ol>
			</article>
			<article className="boxshadow">
				<h2>Final Group Project</h2>
				<h3>Description</h3>
				<p>
					The web/mobile application allows users to listen to songs, create
					playlists, and upload their own music, similarly to Spotify. It also
					contains relevant information about artists, albums, and songs.
				</p>
				<h3>API Endpoints:</h3>
				<ul>
					<li>
						Users
						<ul>
							<li>GET /users</li>
							<li>GET /users/:userId</li>
							<li>GET /users/:userId/songs</li>
							<li>GET /users/:userId/albums</li>
							<li>GET /users/:userId/playlists</li>
							<li>POST /users</li>
							<li>POST /users/login</li>
							<li>PUT /users/:userId</li>
							<li>DELETE /users/:userId</li>
						</ul>
					</li>
					<li>
						Songs
						<ul>
							<li>GET /songs</li>
							<li>POST /songs</li>
							<li>GET /songs/:songId</li>
							<li>PUT /songs/:songId</li>
							<li>DELETE /songs/:songId</li>
							<li>GET /songs/:songId/stream</li>
						</ul>
					</li>
					<li>
						Playlists
						<ul>
							<li>GET /playlists</li>
							<li>POST /playlists</li>
							<li>GET /playlists/:playlistId</li>
							<li>PUT /playlists/:playlistId</li>
							<li>DELETE /playlists/:playlistId</li>
							<li>POST /playlists/:playlistId/:songId</li>
						</ul>
					</li>
					<li>
						Albums
						<ul>
							<li>GET /albums</li>
							<li>POST /albums</li>
							<li>GET /albums/:albumId</li>
							<li>PUT /albums/:albumId</li>
							<li>DELETE /albums/:albumId</li>
							<li>POST /albums/:albumId/:songId</li>
						</ul>
					</li>
				</ul>
				<h3>My Contributions</h3>
				<ul>
					<li>
						Rate Limiting using a{" "}
						<ExtLink to="https://hub.docker.com/_/redis">redis</ExtLink>{" "}
						<ExtLink to="https://www.docker.com/">docker</ExtLink> server and{" "}
						<ExtLink to="https://nodejs.org/en/">node.js</ExtLink>
					</li>
					<li>Testing</li>
				</ul>
				<h3>Team Members</h3>
				<ul>
					<li>
						<ExtLink to="https://github.com/hgulati30">
							Harjasleen Gulati
						</ExtLink>
					</li>
					<li>
						<ExtLink to="https://github.com/GrantHaines">Grant Haines</ExtLink>
					</li>
					<li>
						<ExtLink to="https://github.com/Horowitc">Caulin Horowitz</ExtLink>
					</li>
				</ul>
			</article>
		</>
	);
};

export default CS493;
