import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import Skill from "./Common/Skill";
import portrait320 from "../img/ryan-kirkpatrick-2021-320.jpg";
import portrait640 from "../img/ryan-kirkpatrick-2021-320.jpg";
import portrait1080 from "../img/ryan-kirkpatrick-2021-320.jpg";
import { ExtLink } from "./Common/ExtLink";

import cppLogo from "../img/logos/C++_Logo.svg";
import csharpLogo from "../img/logos/csharp_Logo.svg";
import cLogo from "../img/logos/c_Logo.svg";
import unrealLogo from "../img/logos/Unreal_Engine_Logo.svg";
import GithubCard from "./Common/GithubCard";

export default function About() {
	return (
		<>
			<Helmet>
				<title>{`${process.env.REACT_APP_AUTHOR} - ${process.env.REACT_APP_SLOGAN}`}</title>
			</Helmet>
			<article id="about" className="neumorphic radius-scaled">
				<h1>About</h1>
				<aside className="neumorphic radius-scaled fifty">
					<p>
						I first became interested in Computer Science when I took the
						computer programming 1 class my freshman year in high school. This
						class focused on programming games with drag and drop. The next year
						I joined the high school robotics team and took the computer
						programming 2 class. The second class had nothing to do with video
						games but that's when I learned I enjoy programming. My senior year
						I joined a video game dev competition but this time I used
						script-based programming. I also took a college-level programming
						class.
					</p>
					<p>
						When it became time to pick a major for college it was obvious to me
						that I wanted to do computer science. It combined many of my
						favorite things, math, technology, and problem-solving. Over the
						next four years, I took a wide range of CS classes to keep my career
						options open. I graduated from Oregon State University in June 2021
						with a degree in Computer Science.
					</p>
					<p>
						In February 2021, I was hired to work at a startup company called
						Raedam to work as a Full-stack Developer for the client and business
						website. I have already greatly expanded my skills by learning
						React.js and Firebase hosting. After a week of learning React, the
						lead developer and I converted almost the entire business website to
						React in one weekend.
					</p>
					<p>
						I love working with other Software Engineers because we can learn
						from each other and accelerate the development process. I'm excited
						to continue to learn and challenge my skills.
					</p>
					<br className="clear" />
				</aside>
				<figure className="thirty">
					<img
						className="neumorphic radius-scaled"
						src={portrait320}
						alt={process.env.REACT_APP_AUTHOR + " self portrait"}
						title={"\u00A9 " + process.env.REACT_APP_AUTHOR + " 2021"}
						srcSet={
							portrait320 +
							" 320w, " +
							portrait640 +
							" 640w, " +
							portrait1080 +
							" 1080w"
						}
						width="100%"
						sizes="(max-width: 480px) 100vw, (max-width: 900px) 33vw, 254px"
					/>
					<figcaption>{process.env.REACT_APP_AUTHOR} self-portrait</figcaption>
				</figure>
				<h2>Contact</h2>
				<address>
					<p>
						<i className="material-icons">account_circle</i>
						<Link to="/">{process.env.REACT_APP_AUTHOR}</Link>
					</p>
					<p>
						<i className="material-icons">location_city</i> Tigard, OR 97224
					</p>
					<p>
						<i className="material-icons">email</i>{" "}
						<Link to="/contact">Contact form</Link>
					</p>
					<p>
						<i className="fa fa-linkedin"></i>{" "}
						<ExtLink to="https://www.linkedin.com/in/ryan-kirkpatrick-28310b176/">
							LinkedIn
						</ExtLink>
					</p>
					<p>
						<i className="fa fa-github"></i>{" "}
						<ExtLink
							to="https://github.com/Kirkpary"
							target="_blank"
							rel="noopener noreferrer"
						>
							School Github
						</ExtLink>
					</p>
					<p>
						<i className="fa fa-github"></i>{" "}
						<ExtLink to="https://github.com/RKirkpatrick">
							Personal Github
						</ExtLink>
					</p>
				</address>
				<br className="clear" />
			</article>
			<article id="featured" className="neumorphic radius-scaled">
				<h2>Featured Projects</h2>
				<div className="github-cards">
					<GithubCard
						user="RKirkpatrick"
						repo="Generic-Sensor-Display"
						url="/projects/raedam"
					/>
					<GithubCard
						user="RKirkpatrick"
						repo="Generic-Client-Website"
						url="/projects/raedam-about"
					/>
					<GithubCard user="Kirkpary" repo="MMO-Expo" url="/projects/cs46x" />
				</div>
			</article>
			<article id="education" className="neumorphic radius-scaled">
				<h2>
					<i className="material-icons">school</i> Education
				</h2>
				<dl>
					<dt>
						<ExtLink to="http://www.oregonstate.edu">
							Oregon State University
						</ExtLink>
					</dt>
					<dd>Degree: Computer Science</dd>
					<dd>Applied option: Simulation and Game Programming</dd>
					<dd>Graduated: June 2021</dd>
					<dt>
						<ExtLink to="https://www.ttsdschools.org/ths">
							Tigard High School
						</ExtLink>
					</dt>
					<dd>Graduated: June 2017</dd>
					<dd>1 year in Band</dd>
					<dd>3 years as Lead Programmer on the Robotics team</dd>
					<dd>10 years playing Soccer</dd>
				</dl>
			</article>
			<article id="work" className="neumorphic radius-scaled">
				<h2>
					<i className="material-icons">work</i> Work Experience
				</h2>
				<dl>
					<dt>
						<ExtLink to="http://github.com/raedamco">Raedam</ExtLink> - Software
						Engineer
					</dt>
					<dd>Dates: Jan 2021 - Aug 2021</dd>
					<dd>
						Description: Saved company money by building a custom Public client
						website using HTML, CSS, JS, handlebars, and Node.js to replace
						Squarespace website. Saved time by rewriting the business client
						website in React.js Created GUI for the user to easily edit sensor
						status and view logs. Improved workflow by setting up continuous
						deployment.
					</dd>
					<br />
					<dt>
						<ExtLink to="https://www.landmarkford.com/">
							Landmark Ford Lincoln
						</ExtLink>{" "}
						- Lot Attendant
					</dt>
					<dd>
						Dates: Spring 2017. Summer 2017, 2018, 2019, 2020. Fall 2020. Winter
						2019, Jun 2020 - Present
					</dd>
					<dd>
						Description: Check in, stock in, fuel, wash, park, and deliver cars.
						Help service, used car, and detail when needed. Learned how to drive
						stick shift. Worked part-time through Senior Year and full-time in
						the Summer
					</dd>
					{/* <br />
					<dt>Ghostrealm Games - Lead Programmer</dt>
					<dd>Jan 2017 - Present</dd> */}
				</dl>
			</article>
			<article id="skills" className="neumorphic radius-scaled">
				<h4 className="alignright">Icons represent years of experience</h4>
				<h2>
					<i className="material-icons">tv</i> Skills
				</h2>
				<div className="skills-table">
					<div className="flex-container">
						<Skill name="Python" yearLearned="2019" fontAwesome="fa-python" />
						<Skill
							name="Git/GitHub"
							years={5}
							yearLearned="2018"
							fontAwesome="fa-github"
						/>
						<Skill
							name="HTML"
							years={3}
							yearLearned="2017"
							fontAwesome="fa-html5"
						/>
						<Skill
							name="CSS"
							years={3}
							yearLearned="2017"
							fontAwesome="fa-css3"
						/>
						<Skill
							name="Javascript"
							years={2}
							yearLearned="2017"
							fontAwesome="fa-js"
						/>
						<Skill
							name="PHP"
							years={1}
							yearLearned="2020"
							fontAwesome="fa-php"
						/>
						<Skill name="Node.js" yearLearned="2019" fontAwesome="fa-node" />
						<Skill name="React.js" yearLearned="2021" fontAwesome="fa-react" />
						<Skill
							name="Java"
							years={1}
							yearLearned="2017"
							fontAwesome="fa-java"
						/>
						<Skill name="C" years={1} yearLearned="2017" logoSrc={cLogo} />
						<Skill name="C++" years={1} yearLearned="2018" logoSrc={cppLogo} />
						<Skill
							name="C#"
							years={1}
							yearLearned="2018"
							logoSrc={csharpLogo}
						/>
						<Skill
							name="Unity"
							years={2}
							yearLearned="2018"
							fontAwesome="fa-unity"
						/>
						<Skill
							name="Unreal"
							years={1}
							yearLearned="2021"
							logoSrc={unrealLogo}
						/>
					</div>
					{/* <table id="sort" className="sort">
						<thead>
							<tr>
								<th>Skill</th>
								<th>Novice</th>
								<th>Pretty Good</th>
								<th>Excellent</th>
								<th>Expert</th>
							</tr>
						</thead>
						<tbody>
							<Skill name="Cuda" colSpan="1" years="1" />
							<Skill name="Open CL" colSpan="1" years="1" />
							<Skill name="Open GL" colSpan="1" years="1" />
							<Skill name="GLSL Shaders" colSpan="1" years="2" />
							<Skill name="Web Design/Development" colSpan="3" years="5" />
							<Skill name="HTML" colSpan="3" years="5" />
							<Skill name="CSS" colSpan="3" years="5" />
							<Skill name="Javascript" colSpan="2" years="3" />
							<Skill name="PHP" colSpan="2" years="3" />
							<Skill name="Node.js" colSpan="2" years="3" />
							<Skill name="React.js" colSpan="2" years="1" />
							<Skill name="Mobile Software Development" colSpan="1" years="1" />
							<Skill name="Java" colSpan="2" years="5" />
							<Skill name="C++" colSpan="3" years="5" />
							<Skill name="C#" colSpan="3" years="4" />
							<Skill name="Python" colSpan="2" years="3" />
							<Skill name="Haskell" colSpan="1" years="1" />
							<Skill name="x86 Assembly" colSpan="1" years="1.5" />
							<Skill name="Game Development" colSpan="3" years="6" />
							<Skill name="Unity" colSpan="3" years="4" />
							<Skill name="Unreal Engine" colSpan="2" years="1" />
							<Skill name="Information Technology" colSpan="2" years="5" />
						</tbody>
						<tfoot>
							<tr>
								<th></th>
								<th></th>
								<th></th>
								<th></th>
							</tr>
						</tfoot>
					</table> */}
				</div>
				{/* <script src='tablesort.min.js'></script>
				<script>new Tablesort(document.getElementById('sort'));</script> */}
			</article>
		</>
	);
}
