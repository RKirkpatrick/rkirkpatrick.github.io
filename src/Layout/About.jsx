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
import unrealLogo from "../img/logos/Unreal_Engine_Logo.svg";
import GithubCard from "./Common/GithubCard";

export default function About() {
	const formatter = new Intl.DateTimeFormat("default", {
		month: "short",
		year: "numeric",
	});

	return (
		<>
			<Helmet>
				<title>{`${process.env.REACT_APP_AUTHOR} - ${process.env.REACT_APP_SLOGAN}`}</title>
			</Helmet>
			<article id="about">
				<h1>About</h1>
				<aside className="neu-flat radius-scaled fifty">
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
						className="neu-flat radius-scaled"
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
					{/* <figcaption>{process.env.REACT_APP_AUTHOR} self-portrait</figcaption> */}
				</figure>
				<h2>Contact</h2>
				<address>
					<p>
						<i className="material-icons">account_circle</i>
						<Link to="/">{process.env.REACT_APP_AUTHOR}</Link>
					</p>
					<p>
						<i className="material-icons">location_city</i> Beaverton, OR 97006
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
			<article id="featured">
				<h2>Featured Projects</h2>
				<div className="github-cards">
					<GithubCard
						className="neu-flat-hover-concave radius-scaled"
						user="RKirkpatrick"
						repo="Generic-Sensor-Display"
						url="/projects/raedam"
					/>
					<GithubCard
						className="neu-flat-hover-concave radius-scaled"
						user="RKirkpatrick"
						repo="Generic-Client-Website"
						url="/projects/raedam-about"
					/>
					<GithubCard
						className="neu-flat-hover-concave radius-scaled"
						user="Kirkpary"
						repo="MMO-Expo"
						url="/projects/cs46x"
					/>
				</div>
			</article>
			<article id="education">
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
			<article id="work">
				<h2>
					<i className="material-icons">work</i> Work Experience
				</h2>
				<dl>
					<dt>
						<ExtLink to="https://www.oracle.com/health/">Oracle Health</ExtLink>{" "}
						- Production Software Engineer
					</dt>
					<dd>Dates: Nov 2022 - {formatter.format(new Date())}</dd>
					<dd>
						Description:
						<ul>
							<li>
								Helped improve client satisfaction by decreasing support queue
								backlog.
							</li>
							<li>
								Assist team members with issues during daily office hours.
							</li>
						</ul>
					</dd>
					<br />
					<dt>
						<ExtLink to="http://github.com/raedamco">Raedam</ExtLink> - Software
						Engineer
					</dt>
					<dd>Dates: Jan 2021 - Aug 2021</dd>
					<dd>
						Description:
						<ul>
							<li>
								Saved company money by building a custom Public client website
								using HTML, CSS, JS, handlebars, and Node.js to replace
								Squarespace website.
							</li>
							<li>
								Saved time by rewriting the business client website in React.js
								Created GUI for the user to easily edit sensor status and view
								logs.
							</li>
							<li>Improved workflow by setting up continuous deployment.</li>
						</ul>
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
						Description:{" "}
						<ul>
							<li>Check in, stock in, fuel, wash, park, and deliver cars.</li>
							<li>
								Help service, used car, and detail when needed. Learned how to
								drive stick shift.
							</li>
							<li>
								Worked part-time through Senior Year and full-time in the
								Summer.
							</li>
						</ul>
					</dd>
					{/* <br />
					<dt>Ghostrealm Games - Lead Programmer</dt>
					<dd>Jan 2017 - Present</dd> */}
				</dl>
			</article>
			<article id="skills">
				<h4 className="alignright">Icons represent years of experience</h4>
				<h2>
					<i className="material-icons">tv</i> Skills
				</h2>
				<div className="skills-table">
					<div className="flex-container">
						<Skill
							name="Unity"
							years={2}
							yearLearned="2018"
							fontAwesome="fa-unity"
						/>
						<Skill
							imgClass="invert"
							name="Unreal"
							years={1}
							yearLearned="2021"
							logoSrc={unrealLogo}
						/>
						<Skill
							name="Python"
							years={1}
							yearLearned="2019"
							fontAwesome="fa-python"
						/>
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
						{/* <Skill
							name="PHP"
							years={1}
							yearLearned="2020"
							fontAwesome="fa-php"
						/> */}
						<Skill
							name="Node.js"
							years={1}
							yearLearned="2019"
							fontAwesome="fa-node"
						/>
						<Skill
							name="React.js"
							years={1}
							yearLearned="2021"
							fontAwesome="fa-react"
						/>
						<Skill
							name="Java"
							years={1}
							yearLearned="2017"
							fontAwesome="fa-java"
						/>
						{/* <Skill name="C" years={1} yearLearned="2017" logoSrc={cLogo} /> */}
						<Skill name="C++" years={1} yearLearned="2018" logoSrc={cppLogo} />
						<Skill
							name="C#"
							years={1}
							yearLearned="2018"
							logoSrc={csharpLogo}
						/>
					</div>
				</div>
			</article>
		</>
	);
}
