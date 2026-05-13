import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import Skill from "./Common/Skill";
import portrait320 from "../img/ryan-kirkpatrick-320.jpg";
import portrait640 from "../img/ryan-kirkpatrick-640.jpg";
import portrait1080 from "../img/ryan-kirkpatrick-1080.jpg";
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
						I have always been driven by a single question: How does this work,
						and how can I make it work better?
					</p>
					<p>
						This curiosity led me from early robotics and programming
						competitions to engineering mission-critical digital platforms at
						Oracle Health. My career has been defined by a transition from
						building applications to ensuring their absolute reliability at
						scale.
					</p>
					<p>
						Whether I am architecting responsive full-stack applications in a
						startup environment or performing deep-drill investigations into
						production bottlenecks in a highly regulated healthcare setting, my
						goal is the same: to build and maintain systems that are resilient,
						scalable, and seamless for the end-user.
					</p>
					<p>
						I am a firm believer in continuous learning and collaborative
						engineering. I love working alongside talented teams to solve the
						"impossible" bugs and optimize the systems that people rely on every
						day.
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
					{/* <p>
						<i className="fa fa-github"></i>{" "}
						<ExtLink
							to="https://github.com/Kirkpary"
							target="_blank"
							rel="noopener noreferrer"
						>
							School Github
						</ExtLink>
					</p> */}
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
								<b>System Reliability & Performance:</b> Ensure the seamless
								operation and performance of mission-critical digital healthcare
								applications for global users.
							</li>
							<li>
								<b>Full-Stack Troubleshooting:</b> Conduct deep drill down
								technical investigations into software defects using log
								analysis, code debugging, and proprietary query languages.
							</li>
							<li>
								<b>Cross-Functional Collaboration:</b> Partner with development
								and product teams to escalate high-priority defects and
								implement engineering solutions that improve system stability.
							</li>
							<li>
								<b>Incident Management:</b> Led Root Cause Analysis efforts to
								prevent recurring issues, directly contributing to the increased
								uptime and reliability of digital services.
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
								<b>Full-stack Development:</b> Architected and deployed a
								custom, public website using Node.js and JavaScript,
								significantly reducing operational costs by migrating from
								legacy platforms.
							</li>
							<li>
								<b>Digital Product Enhancement:</b> Engineered a responsive,
								business-to-business website using React.js, improving site
								speed and user engagement.
							</li>
							<li>
								<b>DevOps Implementation:</b> Improved development velocity by
								designing and implementing continuous deployment pipelines.
							</li>
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
						2019, Jun 2020 - Nov 2022
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
				</dl>
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
							years={7}
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
							years={3}
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
							years={2}
							yearLearned="2019"
							fontAwesome="fa-node"
						/>
						<Skill
							name="React.js"
							years={2}
							yearLearned="2021"
							fontAwesome="fa-react"
						/>
						<Skill
							name="React Native"
							years={1}
							yearLearned="2025"
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
