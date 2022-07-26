import ReactMarkdown from "react-markdown";
import { CodeMarkdown } from "../Common/CodeHL";
import { ExtLink } from "../Common/ExtLink";

const CS493 = ({ title }) => {
	return (
		<>
			<article>
				<h1>{title}</h1>
			</article>
			<article>
				<h2>Assignment 1 - Description</h2>
				<ReactMarkdown>
					{`## 1. Design a RESTful API for a Yelp-like application

Your first task for this assignment is to design a RESTful API (i.e. API endpoints with corresponding request and response bodies) for a Yelp-like application.  This application will specifically be centered around businesses and user reviews of businesses in US cities.  The API you design should permit the following functionality:

### Businesses

  * Users who own businesses should be able to add their businesses to the application.  When a business owner adds their business they will need to include the following information:
    * Business name
    * Business street address
    * Business city
    * Business state
    * Business ZIP code
    * Business phone number
    * Business category and subcategories (e.g. category "Restaurant" and subcategory "Pizza")

    The following information may also optionally be included when a new business is added:
      * Business website
      * Business email

  * Business owners may modify any of the information listed above for an already-existing business they own.

  * Business owners may remove a business listing from the application.

  * Users may get a list of businesses.  The representations of businesses in the returned list should include all of the information described above.  In a later assignment, we will implement functionality to allow the user to list only a subset of the businesses based on some filtering criteria, but for now, assume that users will only want to fetch a list of all businesses.

  * Users may fetch detailed information about a business.  Detailed business information will include all of the information described above as well as reviews of the business and photos of the business (which we discuss below).

### Reviews

  * Users may write a review of an existing business.  A review will include the following information:
    * A "star" rating between 0 and 5 (e.g. 4 stars)
    * An "dollar sign" rating between 1 and 4, indicating how expensive the business is (e.g. 2 dollar signs)
    * An optional written review

    Note that a user may write at most one review of any business.

  * Users may modify or delete any review they've written.

### Photos

  * Users may upload image files containing photos of an existing business.  Each photo may have an associated caption.

  * Users may remove any photo they've uploaded, and they may modify the caption of any photo they've uploaded.

  * Users may list all of the businesses they own.

  * Users may list all of the reviews they've written.

  * Users may list all of the photos they've uploaded.

Your design should follow the best practices we're discussing in lecture, such as URL naming, etc.  As you're designing your API, make sure to think about which API responses should be paginated, which API responses should include links to other API resources (i.e. how your API will implement HATEOAS), and what API endpoints will need some form of authentication.  Some of this will come into play in the server implementation you'll write below, while some of it (e.g. authentication) won't come into play until later assignments.

There is no formal deliverable for this part of the assignment, but it will be useful to go through the exercise of designing your API before implementing it, which you'll do in the next step of the assignment.

## 2. Implement a server for your API

After you've designed your API, implement a server for it using Node.js and Express.  Your server should meet the following requirements:

  * Your server API should implement a route for each of the API endpoints in the design you created above.

  * Any API endpoint with a parameterized route should perform basic verification of the specified route parameters.  For example, if you have a route with a parameter representing the ID of a specific business, you should verify that the ID is valid.

  * Any API endpoint that takes a request body should perform basic verification of the data provided in the request body.  You example, if one of your endpoints requires a request body that contains a business name and a business address, you should verify that those two fields are present in the request body.

  * Each API endpoint should respond with an appropriate HTTP status code and, when needed, a response body.

  * API endpoints should have paginated responses where appropriate.

  * Your server should run on the TCP port specified by the \`PORT\` environment variable.

  * You should be able to launch your server using the command \`npm start\`.

  * **Importantly, DO NOT worry about actually storing API data in your server.**  When a client makes a request to your API that includes a request body (e.g. a business), you may simply validate the body without storing it.  When a client makes a request to your API that would generate a response body, you can simply send back (hard-coded) dummy data with the appropriate format.

## 3. Write some basic tests for your server

Once your API server is implemented (or, preferably, as you're implementing your server), your next task is to implement some basic tests for your server.  The test should demonstrate the functionality of all of the endpoints you implemented above.  You may use any tool you like to write these tests (e.g. [Postman](https://www.postman.com/), [Insomnia](https://insomnia.rest/), [curl](https://curl.haxx.se/), etc.).  So that the TA has these tests available when grading your assignment, you should commit and push a representation of these them to your assignment repository on GitHub (e.g. by exporting them from Postman or Insomnia or by writing and committing a shell script with curl commands).`}
				</ReactMarkdown>
			</article>
			<article>
				<h2>Assignment 2 - Description</h2>
				<ReactMarkdown>
					{`## Use a database to power your API

Your overarching goal for this assignment is to modify the API server to use a database to store the following resources:
  * Businesses
  * Reviews
  * Photos

You may choose either MySQL or MongoDB for this purpose (or another DB implementation you're interested in, with permission).  Whichever database you choose, it should completely replace the starter code's existing JSON/in-memory storage for these resources.  In other words, you should update all API endpoints in the original starter code to use your database.

You should use the [official MySQL Docker image](https://hub.docker.com/_/mysql/) or the [official MongoDB Docker image](https://hub.docker.com/_/mongo) from Docker Hub to power your database.  Whichever database you choose, your implementation should satisfy the criteria described below.

## Database initialization

Before you run your application for the first time, you'll have to make sure your database is initialized and ready to store your application data.  Use the mechanisms described below to initialize your database, so it's ready when you launch your app.

### MySQL

If you're using MySQL, you should make sure to set the following environment variables when launching your database container:
  * \`MYSQL_ROOT_PASSWORD\` - This specifies the password that is set for the MySQL \`root\` user.  You can also use \`MYSQL_RANDOM_ROOT_PASSWORD\` to allow the container to generate a random password.
  * \`MYSQL_DATABASE\` - This specifies the name of a MySQL database to be created when your container first starts.
  * \`MYSQL_USER\` and \`MYSQL_PASSWORD\` - These are used to create a new user, in addition to the \`root\` user, who will have permissions only for the database named in \`MYSQL_DATABASE\`.  This is the user you should use to connect to your database from your API server.

In addition, you'll have to make sure all the necessary tables are created in your database, so your app can store data there.  You may also want to store some initial data in these tables, so your app has data to work with right away.  The easiest way to do this is to connect to your MySQL server using the MySQL terminal monitor and issue MySQL queries there to initialize your database, similar to how we initialized the database in lecture.

### MongoDB

If you're using MongoDB, you should make sure to set the following environment variables when launching your database container:
  * \`MONGO_INITDB_ROOT_USERNAME\` and \`MONGO_INITDB_ROOT_USERNAME\` - These are used to create the MongoDB \`root\` user.
  * \`MONGO_INITDB_DATABASE\` - This specifies the name of a MongoDB database to be created when your container first starts.

In addition, you'll have to make sure to create a lower-privileged user with access to the database you specify in \`MONGO_INITDB_DATABASE\` above.  Because MongoDB generally uses a "create-on-first-use" approach and doesn't require a schema, you probably won't have to do any further initialization of your MongoDB database if you don't want to.  However, it may still be helpful to store some initial data in your database, so your app has data to work with right away.  The easiest way to do all this is to connect to your MongoDB server using the MongoDB shell and issue commands to create a user and add data to your database, similar to the way we did this in lecture.

## Database organization

Your database should store all resource data (i.e. businesses, photos, and reviews) for the API.  Because the resources you're working with are closely tied to each other (e.g. each review is tied to both a specific business and a specific user), you'll have to think carefully about how you organize and access them in your database.  Some suggestions are included below for each database.

### MySQL

If you're using MySQL, you will likely want to use [foreign keys](https://dev.mysql.com/doc/refman/8.0/en/example-foreign-keys.html) to link reviews and photos to their corresponding business, and when gathering data for a specific business (i.e. for the \`GET /businesses/{id}\` endpoint), you can either use [\`JOIN\` operations](http://www.mysqltutorial.org/mysql-join/) or run multiple queries to fetch the corresponding reviews and photos.

### MongoDB

If you're using MongoDB, there are many valid ways to organize data in your database.  For example, you could use three separate collections to store businesses, reviews, and photos.  In this case, you can either use [\`$lookup\` aggregation](https://docs.mongodb.com/manual/reference/operator/aggregation/lookup/) or multiple queries to gather data for a specific business (i.e. for the \`GET /businesses/{id}\` endpoint).

Alternatively, you could store all photos and reviews as subdocuments of their corresponding business document.  In this case, you'll likely want to use [a projection](https://docs.mongodb.com/manual/tutorial/project-fields-from-query-results/) to omit the photo and review data from businesses when returning a list of all businesses (i.e. from the \`GET /businesses\` endpoint).  You'll also have to think carefully about how you find data for a specific user, e.g. a specific user's photos or reviews.  Do do this, you can use [subdocument array queries](https://docs.mongodb.com/manual/tutorial/query-array-of-documents/) to select businesses with reviews/photos by the specified user, and then you can use some custom JS to select only matching reviews/photos from those businesses.  Alternatively, you can use MongoDB's [aggregation pipeline](https://docs.mongodb.com/manual/core/aggregation-pipeline/) to structure a single query to fetch exactly the reviews/photos you're interested in.

## Data persistence with a Docker volume

Whichever database you use, you should persist its data in a Docker volume (*not a bind mount to a host directory*).  A Docker volume is a mechanism for persisting data created by a Docker container.  You can think of them like portable disks that can be attached to Docker containers.  You can find documentation on how Docker volumes work here:

https://docs.docker.com/storage/volumes/

By default, MySQL stores data in the directory \`/var/lib/mysql\`, and MongoDB stores data in the directory \`/data/db\`.  To persist data for your database, it should be sufficient to create a Docker volume (with \`docker volume create\`) and mount it at the appropriate one of these locations in your database container (using the \`-v\` option when launching the DB container).

## API server setup

Your API server should read the location (i.e. hostname, port, and database name) and credentials (i.e. username and password) for your database from environment variables.`}
				</ReactMarkdown>
			</article>
			<article>
				<h2>Assignment 3 - Description</h2>
				<ReactMarkdown>
					{`## 1. Implement an API endpoint for creating new users

Your first task for this assignment is to implement an API endpoint to enable the creation and storage of application users.  Specifically, you should create a \`POST /users\` API endpoint through which new users can register.  When a user registers, they should provide their name, email address, and password, and you should salt and hash the password on the server before storing it.

The DB initialization file in \`db-init/\` already creates a \`users\` table in which to store information about application users.  This table has the following columns, which correspond to the information you must store about the user:
  * \`id\` - User's integer ID (this is an \`AUTO_INCREMENT\` column)
  * \`name\` - User's full name
  * \`email\` - User's email address (which must be unique among all users)
  * \`password\` - User's hashed/salted password
  * \`admin\` - A boolean flag indicating whether the user has administrative permissions (\`false\` by default)

## 2. Enable JWT-based user logins and implement a user data access endpoint

Once you have enabled user registration for your application, implement a new \`POST /users/login\` API endpoint that allows a registered user to log in by sending their email address and password.  If the email/password combination is valid, you should respond with a JWT token, which the user can then send with future requests to authenticate themselves.  The JWT token payload should contain the user's ID (with which you should be able to fetch details about the user from the database) and any other information needed to implement the features described in this assignment, and it should expire after 24 hours.

If a user attempts to log in with an invalid username or password, you should respond with a 401 error.

In addition, you should create a \`GET /users/{userId}\` API endpoint that returns information about the specified user (excluding their password).

Importantly, note that the DB init script in \`db-init/\` creates several users with passwords that are pre-hashed/salted.  The plaintext password for all of these users is \`hunter2\`.

## 3. Require authorization to perform certain API actions

Once users can log in, modify your API so that it requires clients to authenticate users to implement the following authorization scheme:
  * Only an authorized user can see their own user data and their own lists of businesses, reviews, and photos.  In other words, the following API endpoints should verify that the \`userId\` specified in the URL path matches the ID of the logged-in user (as indicated by a valid JWT provided by the client):
    * \`GET /users/{userId}\`
    * \`GET /users/{userId}/businesses\`
    * \`GET /users/{userId}/photos\`
    * \`GET /users/{userId}/reviews\`

  * Only an authorized user can create new businesses, reviews, and photos.  In other words, the following API endpoints must ensure that a user is logged in and that the user ID specified in the POST request body matches the ID of the logged-in user:
    * \`POST /businesses\`
    * \`POST /photos\`
    * \`POST /reviews\`

  * Only an authorized user can modify or delete their own businesses, reviews, and photos.  In other words, the following API endpoints must ensure that a user is logged in and that the user ID for the entity being modified/deleted matches the ID of the logged-in user:
    * \`PUT /businesses\`, \`DELETE /businesses\`
    * \`PUT /photos\`, \`DELETE /photos\`
    * \`PUT /reviews\`, \`DELETE /reviews\`

  * A user with \`admin\` permissions may perform any action, including creating content or fetching/modifying/deleting the content of any user.

  * Only a user with \`admin\` permissions may create other \`admin\` users.
    * Note that there is currently one admin user specified in the DB init script in \`db-init/\`.  They have email address \`admin@businesses.com\` and password \`hunter2\`.

All authorized endpoints should respond with an error if the logged-in user is not authorized or if no user is logged in (i.e. no JWT is provided).`}
				</ReactMarkdown>
			</article>
			<article>
				<h2>Assignment 4 - Description</h2>
				<ReactMarkdown components={CodeMarkdown}>
					{`## 1. Support photo file uploads

Your first task for the assignment is to modify the \`POST /photos\` endpoint to support actual photo uploads.  Specifically, you should update this endpoint to expect a multipart form-data body that contains a \`file\` field in addition to the fields currently supported by the endpoint (\`businessid\` and \`caption\`).  In requests to this endpoint, the \`file\` field should specifically contain raw binary data for an image file.  The endpoint should accept images in either the JPEG (\`image/jpeg\`) or PNG (\`image/PNG\`) format.  Files in any other format should result in the API server returning an error response.

## 2. Store uploaded photo data in GridFS

Once your API successfully accepts image file uploads to the \`POST /photos\` endpoint, you should modify the API to store those image files in GridFS in the MongoDB database that's already powering the API.  Photo metadata corresponding the image files (i.e. \`businessid\` and \`caption\`) should be stored alongside the files themselves.

Once your API is storing photo data in GridFS, it should no longer use the \`photos\` MongoDB collection in which it currently stores photo metadata.  In other words, all data related to the \`photos\` collection should be stored in GridFS.  This will require you to update other API endpoints to work with the data stored in GridFS, including:
  * \`GET /businesses/{id}\`
  * \`GET /photos/{id}\`

## 3. Use RabbitMQ to generate new image sizes offline

Your next task in the assignment is to use RabbitMQ to facilitate the generation of multiple resized versions of every image.  This should happen offline (i.e. outside the normal API request/response cycle).  This task can be broken into a few separate steps:

  * **Start a RabbitMQ daemon running in a Docker container.**  You can do this with the [official RabbitMQ Docker image](https://hub.docker.com/_/rabbitmq/).

  * **Turn your API server into a RabbitMQ producer.**  Specifically, each time a new photo is uploaded and stored into your GridFS database, your API server should add a new task to a RabbitMQ queue corresponding to the new photo that was just uploaded.  The task should contain information (e.g. the ID of the just-uploaded photo) that will eventually allow RabbitMQ consumers (which you'll write) to fetch the original image file out of GridFS.

  * **Implement a RabbitMQ consumer that generates multiple sizes for a given image.**  Your consumer should specifically use information from each message it processes to fetch a newly-uploaded photo file from GridFS and generate multiple smaller, resized versions of that photo file.  Specifically, all of the following sizes should be generated for each photo:
      * Maximum side (height or width) 1024px
      * Maximum side (height or width) 640px
      * Maximum side (height or width) 256px
      * Maximum side (height or width) 128px

All resized versions of the photo should be in JPEG format (i.e. \`image/jpeg\`).  If the original image file is in PNG format, you should also generate a JPEG version of the image with the same dimensions as the original photo.  You should not generate resized images that are *larger* than the original photo.  For example, if the maximum side (height or width) of an original image is 512px, you should only generate the 256px and 128px sizes for it, not the 640px and 1024px sizes.

All resized images should be stored in GridFS and linked to the original image entry in GridFS.  In other words, you should be able to "find" all of the available sizes for a given image by looking up the original image in the database.  For example, you can add a field to the original image document's metadata indicating all available sizes for that photo and the IDs of the corresponding files in GridFS, e.g.:
\`\`\`json
{
	"640": ObjectId("5ce48a2ddf60d448aed2b1c3"),
	"256": ObjectId("5ce48a2ddf60d448aed2b1c5"),
	"128": ObjectId("5ce48a2ddf60d448aed2b1c7"),
	"orig": ObjectId("5ce48a2ddf60d448aed2b1c9")
}
\`\`\`

There are multiple packages on NPM you can use to actually perform the image resizing itself, including [Jimp](https://www.npmjs.com/package/jimp) and [sharp](https://www.npmjs.com/package/sharp).  Each of these has a straightforward interface.  However, you're free to use whatever tool you like to perform the resizing.  You may even write your consumer in a different programming language (e.g. Python) if you prefer.

When your consumer is working correctly, you should be able to launch one or more instances of the consumer running alongside your API server, the RabbitMQ daemon, and the MongoDB server, and you should be able to see the consumers processing photos as they're uploaded.  Note that only the RabbitMQ daemon and the MongoDB server need to be run within Docker containers.  The API server and RabbitMQ consumer(s) can run either in Docker or directly on your host machine.

## 4. Make all sizes for each photo available for download

Once all of the resized images are saved in GridFS, you should make them available for download via a URL with the following format, where \`{id}\` represents the ID of the original image and \`{size}\` represents the requested size:
\`\`\`
/media/photos/{id}-{size}.jpg
\`\`\`
Specifically, you should modify the \`GET /photos/{id}\` endpoint to include URLs for all available sizes for the image in the \`urls\` field of the response sent back to the client.  The \`urls\` field should have a URL for each size available for the image, e.g.:
\`\`\`json
{
  "640": "/media/photos/5ce48a2ddf60d448aed2b1c1-640.jpg",
  "256": "/media/photos/5ce48a2ddf60d448aed2b1c1-256.jpg",
  "128": "/media/photos/5ce48a2ddf60d448aed2b1c1-128.jpg",
  "orig": "/media/photos/5ce48a2ddf60d448aed2b1c1-orig.jpg"
}
\`\`\`
Then, you should add a new \`GET /media/photos/{id}-{size}.jpg\` API endpoint to allow image downloads.  This endpoint should respond with the content of the image file corresponding to \`{id}\` and \`{size}\`.  If either the requested ID or the requested size is invalid, the endpoint should respond with a 404 error.`}
				</ReactMarkdown>
			</article>
			<article>
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
