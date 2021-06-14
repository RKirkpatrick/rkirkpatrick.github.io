import React from "react";
import { Link } from "react-router-dom";
import Skill from "./Common/Skill";
import portrait320 from "../img/ryan-kirkpatrick-2021-320.jpg";
import portrait640 from "../img/ryan-kirkpatrick-2021-320.jpg";
import portrait1080 from "../img/ryan-kirkpatrick-2021-320.jpg";

export default function About() {
	return (
		<>
			<article id="about" className="boxshadow">
				<h1>About</h1>
				<aside className="alignright boxshadow fifty dark-brown-bg light-blue">
					<figure className="alignleft thirty">
						<img
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
							sizes="(max-width: 480px) 100vw, (max-width: 900px) 33vw, 254px"
						/>
						<figcaption>
							{process.env.REACT_APP_AUTHOR} self-portrait
						</figcaption>
					</figure>
					<p className="">
						I first became interested in Computer Science when I joined my high
						school robotics team. Since then I started a small video game
						company with one of my friends. I am currently a Senior at Oregon
						State University studying Computer Science and I plan to graduate in
						2021. I am interested in Software Development, Mobile Development,
						and Web Development. My preferred job would be Game Developer.
					</p>
					<br className="clear" />
				</aside>
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
						<a
							href="https://www.linkedin.com/in/ryan-kirkpatrick-28310b176/"
							target="_blank"
							rel="noopener noreferrer"
						>
							LinkedIn
						</a>
					</p>
					<p>
						<i className="fa fa-github"></i>{" "}
						<a
							href="https://github.com/Kirkpary"
							target="_blank"
							rel="noopener noreferrer"
						>
							School Github
						</a>
					</p>
					<p>
						<i className="fa fa-github"></i>{" "}
						<a
							href="https://github.com/RKirkpatrick"
							target="_blank"
							rel="noopener noreferrer"
						>
							Personal Github
						</a>
					</p>
				</address>
				<br className="clear" />
			</article>
			<article id="education" className="boxshadow dark-brown-bg light-blue">
				<h2>
					<i className="material-icons">school</i> Education
				</h2>
				<dl>
					<dt>
						<a
							href="http://www.oregonstate.edu"
							target="_blank"
							rel="noopener noreferrer"
						>
							Oregon State University
						</a>
					</dt>
					<dd>Degree: Computer Science</dd>
					<dd>Applied option: Simulation and Game Programming</dd>
					<dd>Graduated: June 2021</dd>
					<dt>
						<a
							href="https://www.ttsdschools.org/ths"
							target="_blank"
							rel="noopener noreferrer"
						>
							Tigard High School
						</a>
					</dt>
					<dd>Graduated: June 2017</dd>
					<dd>1 year in Band</dd>
					<dd>3 years as Lead Programmer on the Robotics team</dd>
					<dd>10 years playing Soccer</dd>
				</dl>
			</article>
			<article id="work" className="boxshadow blue-bg light-blue">
				<h2>
					<i className="material-icons">work</i> Work Experience
				</h2>
				<dl>
					<dt>
						<a
							href="https://www.landmarkford.com/"
							target="_blank"
							rel="noopener noreferrer"
						>
							Landmark Ford Lincoln
						</a>
					</dt>
					<dd>Lot Attendant</dd>
					<dd>
						Spring 2017. Summer 2017, 2018, 2019, 2020. Fall 2020. Winter 2019,
						2020
					</dd>
					<dt>Ghostrealm Games</dt>
					<dd>Lead Programmer</dd>
					<dd>Jan 2017 - Present</dd>
				</dl>
			</article>
			<article id="skills" className="boxshadow green-bg light-blue">
				<h2>
					<i className="material-icons">tv</i> Skills
				</h2>
				<table id="sort" className="sort">
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
						<Skill name="PHP" colSpan="2" years="3" />
						<Skill name="Node.js" colSpan="2" years="3" />
						<Skill name="Javascript" colSpan="2" years="3" />
						<Skill name="Mobile Software Development" colSpan="1" years="1" />
						<Skill name="Java" colSpan="2" years="5" />
						<Skill name="C++" colSpan="3" years="5" />
						<Skill name="C#" colSpan="3" years="4" />
						<Skill name="Python" colSpan="2" years="3" />
						<Skill name="Haskell" colSpan="1" years="1" />
						<Skill name="x86 Assembly" colSpan="1" years="1.5" />
						<Skill name="Game Development" colSpan="3" years="6" />
						<Skill name="Unity" colSpan="3" years="4" />
						<Skill name="Unreal Engine" colSpan="1" years="1" />
						<Skill name="Information Technology" colSpan="2" years="5" />
						<Skill name="Microsoft Office Programs" colSpan="2" years="8" />
					</tbody>
					<tfoot>
						<tr>
							<th></th>
							<th></th>
							<th></th>
							<th></th>
						</tr>
					</tfoot>
				</table>
				{/* <script src='tablesort.min.js'></script>
				<script>new Tablesort(document.getElementById('sort'));</script> */}
			</article>
		</>
	);
}
