import React from 'react';

export default function CS290() {
	return (
		<>
			<article class="boxshadow">
				<h1>CS 290: Web Development Projects</h1>
			</article>
			<article class="boxshadow">
				<h2>Assignment 2</h2>
				<a href="http://web.engr.oregonstate.edu/~kirkpary/cs290/assignment-2" target="_blank" rel="noopener noreferrer">Link to website</a>
				<h3>Description</h3>
				<p>The goals of this assignment are to exercise your CSS skills and to give you practice at making a coded page match a set of provided mocks, which is a common task for a web developer.</p>
				<p>Here, you are provided with an un-styled index.html file, an empty style.css file, and a set of mocks (actually screenshots/captures) in the mocks/ directory. Your task is to fill out style.css so that your rendered index.html page matches the mocks as closely as possible.</p>
				<p>A few important things to note about the design that may not be clear in the static mocks:</p>
				<ul>
					<li><p>The Google Fonts stylesheet for the font you should use (Roboto) is included in the HTML.</p></li>
					<li><p>The layout is responsive, in that columns are added and removed as the size of the browser viewport changes. There should be a maximum of 3 columns.</p></li>
					<li><p>The location of the button to add a "twit" does not change relative to the viewport, even as the page is scrolled.</p></li>
					<li><p>The "active" navbar link (i.e. the link corresponding to the page currently being viewed) is highlighted with a small line underneath.</p></li>
					<li><p>There are several hover interactions on the page:</p></li>
					<ul>
						<li><p>All links, including the navbar links and the name associated with each "twit" are highlighted in a blue-ish color when they're hovered over. The search magnifying glass button has the same hover effect.</p></li>
						<li><p>The button to add a "twit" is highlighted in blue and grows slightly on hover.</p></li>
					</ul>
					<li><p>The background of the search box changes when the box has focus.</p></li>
					<li><p>Again, your goal is to match the mocks as closely as possible. I'll show some tools in class that will help you do this. Don't worry, however, if you don't get things like padding, margins, etc. exactly right.</p></li>
				</ul>
			</article>
			<article class="boxshadow">
				<h2>Assignment 3</h2>
				<a href="http://web.engr.oregonstate.edu/~kirkpary/cs290/assignment-3" target="_blank" rel="noopener noreferrer">Link to website</a>
				<h3>Description</h3>
				<p>The goal of this assignment is to start using JavaScript on the client to add interactions to a web page, including reacting to user-generated events and manipulating the DOM. We will build off of our work from Assignment 2.</p>
				<p>Here, you are provided with an index.html file and a style.css file that, combined, give you the "Tweeter" page we worked on in Assignment 2 (plus a little extra that we'll use in this assignment). You're also given an empty index.js file. Your job is to fill out index.js to add the following interactions to the page:</p>
				<ol>
					<li><p>Clicking on the red "create twit" button should display a modal that allows you to write a new twit. The modal (along with a backdrop that goes behind it to shade the underlying page while the modal is displayed) are both already included in the HTML code, so you don't have to create them from scratch, but they are hidden when the page is first loaded. Clicking the red "create twit" button should un-hide them. You'll have to examine the HTML to figure out the relevant IDs/classes to accomplish this.</p></li>
					<li><p>When the modal is open, clicking the modal close button (the small "X" in the upper-right corner) or the modal cancel button (the one in the modal footer that says "Cancel") should close the modal by re-hiding it and the backdrop. When the modal is closed, the values of all of the input fields should be cleared so they don't appear the next time the modal is opened.</p></li>
					<li><p>When the modal is open, clicking the modal accept button (the one in the modal footer that says "Create Twit") should close the modal and generate a new twit that is placed inside the twit container after all of the other existing ones. The new twit should match the structure of the existing twits so it is styled correctly. Here is what the structure of the twit should be:</p>
					<pre><code>
			&ltarticle class="twit"&gt
				&ltdiv class="twit-icon"&gt
					&lti class="fa fa-bullhorn"&gt&lt/i&gt
				&lt/div&gt
				&ltdiv class="twit-content"&gt
					&ltp class="twit-text"&gt
						&lt--! Put the twit text entered by the user here. --&gt
					&lt/p&gt
					&ltp class="twit-author"&gt
						&lta href="#"&gt&lt--! Put the twit author entered by the user here. --&gt&lt/a&gt
					&lt/p&gt
				&lt/div&gt
			&lt/article&gt
					</code></pre>
					<p>Importantly, you should not use innerHTML to generate HTML content directly from user-input content, since this is a security hazard. You must ensure that user-input content is safely added into the DOM.</p>
					<p>When the new twit is created and the modal is closed, the values of all of the input fields should be cleared so they don't appear the next time the modal is opened.</p></li>
					<li><p>If the user clicks the modal accept button while either of the input fields is blank, the user should be alerted (using the alert() function), and the modal should be kept open until the user either closes/cancels it or provides values for both input fields. A new twit should not be created if the user hasn't specified values for both fields.</p></li>
					<li><p>When the user enters a search query into the search box in the navbar and clicks the search button (the little magnifying glass in the navbar), any twits whose text or author don't contain the specified search query should be removed from the DOM (completely removed from the DOM, not just hidden), leaving only the ones that match the search query being displayed. Don't worry about re-displaying the removed twits if the search query changes. You can rely on refreshing the page to bring all of the original twits back (newly entered ones will be lost this way).</p></li>
				</ol>
			</article>
			<article class="boxshadow">
				<h2>Assignment 4</h2>
				<h3>Description</h3>
				<p>The goal of this assignment is to start to use Node.js and some of its built-in modules to build a very simple web server that serves static content.</p>
				<p>You are provided with several files in public/ implementing the Tweeter site we've been working on throughout the course, with the exception of index.js. If you opened the index.html file in your browser, you'd see the site you're familiar with by now, with all of its styling and, when you add your own index.js file, its interactions. In addition to your familiar files, you're also provided with a file 404.html, whose purpose we'll get to in a bit.</p>
				<p>The file server.js is the file you'll work on for this assignment. Your job is to complete that file to implement a very basic Node-based web server that satisfies the following requirements:</p>
				<ul>
					<li><p>First, add your name and oregonstate.edu email address to the header comment in server.js, so the TA grading your assignment knows who you are.</p></li>
					<li><p>The server can only use Node's built-in modules (e.g. http, fs, path, etc.), no third-party modules.</p></li>
					<li><p>The server should listen for requests on the port specified by the environment variable PORT. If PORT is not present in the environment, the server should listen on port 3000 by default.</p></li>
					<li><p>When someone requests a path from your server that corresponds to the name of one of the files in public/, your server should respond with the contents of that file and a status code of 200. For example, if you run your server on port 3000 on your laptop, you should be able to access the following files by entering the following URLs into your browser:</p></li>
					<ul>
						<li><p>public/index.html - <a href="http://localhost:3000/index.html" target="_blank" rel="noopener noreferrer">http://localhost:3000/index.html</a></p></li>
						<li><p>public/index.js - <a href="http://localhost:3000/index.js" target="_blank" rel="noopener noreferrer">http://localhost:3000/index.js</a></p></li>
						<li><p>public/style.css - <a href="http://localhost:3000/style.css" target="_blank" rel="noopener noreferrer">http://localhost:3000/style.css</a></p></li>
						<li><p>public/404.html - <a href="http://localhost:3000/404.html" target="_blank" rel="noopener noreferrer">http://localhost:3000/404.html</a></p></li>
					</ul>
					<li><p>Note that if everything is hooked up correctly, your index.html and 404.html pages will automatically have styles and interactions from style.css and index.js because the browser will see those files referenced from the HTML and make additional requests for those files.</p></li>
					<li><p>When someone requests the root path (i.e. /) from your server, it should respond with the contents of public/index.html and a status code of 200. For example, if you run your server on port 3000 on your laptop and visit http://localhost:3000 in your laptop's browser, your server should send the contents of public/index.html.</p></li>
					<li><p>If someone visits a path on your site that does not correspond to the name of any of the files in public/, your server should respond with the contents of public/404.html and a status code of 404. For example, if you run your server on port 3000 on your laptop and visit http://localhost:3000/thispagedoesnotexist in your laptop's browser, your server should serve the contents of public/404.html.</p></li>
					<li><p>Your server should read any given file in public/ from disk only once. In other words, the contents of each file should be cached (i.e. saved) in the server's memory after the first read, and the server should use this cache when responding with a file's contents instead of reading the file a second time. In other words, after you read a file from disk once, you should always read it from memory. You should add a console.log() statement immediately before each call to read a file to prove to yourself that each file is being read only once.</p></li>
				</ul>
			</article>
			<article class="boxshadow">
				<h2>Assignment 5</h2>
				<a href="https://webdev-h5.glitch.me/" target="_blank" rel="noopener noreferrer">Link to website</a>
				<h3>Description</h3>
				<h3>1.	Implement a twit template and use it on the client side</h3>
				<p>When the user adds a new twit using the "create twit" button in the current site, the client-side code in index.js calls a function insertNewTwit(), which uses native JS methods to construct a DOM element representing a new twit based on data passed as arguments to the function and inserts that new twit element into the DOM at the appropriate location.</p>
				<p>Your first task in this assignment is to write a Handlebars template to represent a single twit and then to use that template in insertNewTwit() instead of the native JS methods currently used to create a new twit and insert it into the DOM. Here are some specific things you'll have to do to make this happen:</p>
				<ul>
					<li><p>Implement your twit template in its own .handlebars file. You'll use this template in later steps, too.</p></li>
					<li><p>Add to your package.json file a new build script that uses handlebars to pre-compile your twit template into a JS file. Note that you'll need to install handlebars as a dependency of your package in order to do this pre-compilation. Make sure your server process in server.js serves this generated JS file, and make sure to hook your build script up so it's run every time you use npm start to start the server, just in case you change your template.</p></li>
					<li><p>Make sure your client-side HTML code includes your generated JS script for the twit template. Also make sure your client-side HTML code includes the Handlebars runtime library, so it can actually use your template.</p></li>
					<li><p>Replace the native JS functions currently used in insertNewTwit() to build and insert a new twit element with a call to your twit template function, making sure to pass the appropriate arguments into the twit template function. Note that your twit template function will generate an HTML string, not a DOM element, so you'll have to use a slightly different approach to insert the new twit into the DOM.</p></li>
				</ul>
				<h3>2.	Templatize the twits page to replace index.html</h3>
				<p>The current site uses a hard-coded page in index.html to display a page containing 8 twits. Your next task in the assignment is to implement a templatized version of this twits page, and to use data stored on the server side to dynamically generate the twits page when a client requests it. Specifically, you are provided with raw data in twitData.json representing the current set of 8 twits. You should use that data in conjunction with a set of templates you write to replace the functionality index.html. Here are some specific things you'll have to do to make this happen:</p>
				<ul>
					<li><p>Implement one or more .handlebars template files to replicate the structure of index.html.</p></li>
					<ul>
						<li><p>Your new set of templates can use a layout template if you'd like. This isn't strictly necessary here, but you'll have to do it eventually to earn full credit for the assignment.</p></li>
					</ul>
					<li><p>In these new templates, instead of hard-coding the twits to be displayed, use the twit template you created in step 1 as a partial to render each twit in an array of twits that's passed as a template argument.</p></li>
					<li><p>In your server process in server.js, set up your Express server to use express-handlebars as the view engine. Note that you'll need to install express-handlebars as a dependency of your package.</p></li>
					<li><p>Implement a route in your server process for the root path /. Make sure this route's middleware is called before the middleware function that serves index.html. Within this new route, you should respond to the client by using your newly-created template(s) to render the twits page (which should look the same as index.html). In particular, make sure you load the raw twit data from twitData.json and pass all of this twit data into your template(s) using the appropriate template argument(s). When you render the twits page this way, make sure to respond with status 200.</p></li>
					<li><p>Delete index.html (or move it somewhere outside of the public/ directory). After you've got your templates in place for this part of the assignment, you won't need index.html anymore, and you'll want to make sure your site is actually using your templates and not index.html to render the site. The best way to do that is to get rid of index.html.</p></li>
				</ul>
				<h3>3.	Templatize the 404 page</h3>
				<p>The current site contains a route in the server process in server.js that responds with a 404 status and an error page hard-coded in 404.html whenever a client requests an unknown path. Your next task for the assignment is to turn this 404 page into a template.</p>
				<p>There are two ways to do this. The "easy" way is just to basically copy 404.html into a new Handlebars template, e.g. 404.handlebars. However, if you do this, you'll notice that there is a lot of duplicated code between your 404 template and your twits page template. To earn full credit, you must templatize all of the elements that are common to both pages and re-use those templates whenever those elements need to be rendered. Specifically, here are some of the things you'll need to do to accomplish this:</p>
				<ul>
					<li><p>Write a layout template that contains the HTML skeleton that's common to both the 404 page and the twits page. Make sure all of the needed CSS and client-side JS is included in this layout template. Also make sure you set your server process up to use this layout template. Remove this HTML skeleton from the 404 and twits page templates, and allow it to be provided via your new layout template.</p></li>
					<li><p>Write a partial representing each of the visual elements that are common to both the 404 page and the twits page, e.g. the page header. Use these partials to render these elements in each page. You can go even further than this if you like, writing and using a partial for each discrete "component" in the site, e.g. the create twit button/modal, but this is not necessary.</p></li>
					<li><p>Again, after you get all of this hooked up, you should delete (or move) 404.html to make sure your site is correctly using your new templates.</p></li>
				</ul>
				<h3>4.	Implement a page to render a single twit</h3>
				<p>Finally, use the twit template you implemented in step 1 to create a new route that displays a single twit. This route should behave as follows:</p>
				<ul>
					<li><p>When a client requests a path of the form /twits/&ltn&gt, where &ltn&gt is an integer that is within the bounds of the array of twits stored in twitData.json (i.e. &ltn&gt is between 0 and 7), you should respond with a page that contains only the corresponding twit. If &ltn&gt is not within the bounds of the array of twits, or if it's not an integer, you should respond with a 404 status and the 404 page you implemented in step 3.</p></li>
					<li><p>Your single-twit page should contain only the site header and the individual twit that was requested, the following things should not be displayed or even present in the DOM:</p></li>
					<ul>
						<li><p>Any twits other than the one that was requested.</p></li>
						<li><p>The "create twit" button.</p></li>
						<li><p>The "create twit" modal and its backdrop.</p></li>
					</ul>
					<li><p>For full credit, you should use the same template to render both your root path / and the /twits/&ltn&gt path. You can still earn partial credit by implementing separate templates for each of these paths.</p></li>
				</ul>
			</article>
			<article class="boxshadow">
				<h2>Blog</h2>
				<a href="http://web.engr.oregonstate.edu/~kirkpary/cs290/blog/blog.html" target="_blank" rel="noopener noreferrer">Link to website</a>
				<h3>Description</h3>
				<p>This blog was used to document difficulties, what we learned, and what resources we used on each assignment.</p>
			</article>
			<article class="boxshadow">
				<h2>Final Group Project</h2>
				<a href="https://treasr.glitch.me/" target="_blank" rel="noopener noreferrer">Link to website</a>
				<br />
				<a href="https://treasr.glitch.me/admin/admin" target="_blank" rel="noopener noreferrer">Link to admin page</a>
				<h3>Team Members:</h3>
				<ul>
					<li><a href="https://github.com/jack3017" target="_blank" rel="noopener noreferrer">Jack McConnell</a></li>
					<li><a href="https://github.com/boomerc" target="_blank" rel="noopener noreferrer">Casey Boomer</a></li>
					<li><a href="https://github.com/vossli" target="_blank" rel="noopener noreferrer">Lindy Voss</a></li>
				</ul>
				<h3>Description</h3>
				<p>Uses mongoDB to store users posts and display them for each page. It can also filter all posts by most likes on the trending page. My contribution to this group project was the sidebar and the backend for displaying the database as different pages on the website.</p>
			</article>
		</>
	);
}