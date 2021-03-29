import React from 'react';
import {Link} from 'react-router-dom';
import Skill from './Partials/Skill';
import portrait320 from '../img/ryan-kirkpatrick-2021-320.jpg';
import portrait640 from '../img/ryan-kirkpatrick-2021-320.jpg';
import portrait1080 from '../img/ryan-kirkpatrick-2021-320.jpg';

export default function About() {
	return (
		<main id="top">
			<article id="about" className="boxshadow">
				<h1>About</h1> 
					<aside className="alignright boxshadow fifty dark-brown-bg light-blue">
						<figure className="alignleft thirty">
							<img src={portrait320}
								alt={process.env.REACT_APP_AUTHOR + " self portrait"}
								title={"&copy; " + process.env.REACT_APP_AUTHOR + " 2021"}
								srcset={portrait320 + " 320w, " + portrait640 + " 640w, " + portrait1080 + " 1080w"}
								sizes="(max-width: 480px) 100vw, (max-width: 900px) 33vw, 254px"
							/>
							<figcaption>{process.env.REACT_APP_AUTHOR} self-portrait</figcaption>
						</figure>
						<p className="">
							I first became interested in Computer Science when I joined my high school robotics team. Since then I started a small video game company with one of my friends. 
							I am currently a Senior at Oregon State University studying Computer Science and I plan to graduate in 2021. I am interested in Software Development, Mobile 
							Development, and Web Development. My preferred job would be Game Developer.
						</p>
						<br className="clear" />
					</aside>
					<h2>Contact</h2>
					<address>
						<p>
							<i className="material-icons">account_circle</i>
							<Link to="/">
								{process.env.REACT_APP_AUTHOR}
							</Link>
						</p>
						<p><i className="material-icons">location_city</i> Tigard, OR 97224</p>
						<p><i className="material-icons">email</i> <Link to="/contact">Contact form</Link></p>
						<p><i className="socicon-linkedin"></i> <a href="https://www.linkedin.com/in/ryan-kirkpatrick-28310b176/" target="_blank">LinkedIn</a></p>
						<p><i className="socicon-github"></i> <a href="https://github.com/Kirkpary" target="_blank">School Github</a></p>
						<p><i className="socicon-github"></i> <a href="https://github.com/RKirkpatrick" target="_blank">Personal Github</a></p>
					</address>
					<br className="clear" />
				
			</article>
			<article id="education" className="boxshadow dark-brown-bg light-blue">
				<h2><i className="material-icons">school</i>  Education</h2>
				<dl>
					<dt><a href="http://www.oregonstate.edu" target="_blank">Oregon State University</a></dt>
						<dd>Degree: Computer Science</dd>
						<dd>Applied option: Simulation and Game Programming</dd>
						<dd>Graduating: June 2021</dd>
					<dt><a href="https://www.ttsdschools.org/ths" target="_blank">Tigard High School</a></dt>
						<dd>Graduated: June 2017</dd>
						<dd>1 year in Band</dd>
						<dd>3 years as Lead Programmer on the Robotics team</dd>
						<dd>10 years playing Soccer</dd>
				</dl>
			</article>
			<article id="work" className="boxshadow blue-bg light-blue">
				<h2><i className="material-icons">work</i> Work Experience</h2>
				<dl>
					<dt><a href="https://www.landmarkford.com/" target="_blank">Landmark Ford Lincoln</a></dt>
						<dd>Lot Attendant</dd>
						<dd>Spring 2017. Summer 2017, 2018, 2019, 2020. Fall 2020. Winter 2019, 2020</dd>
					<dt>Ghostrealm Games</dt>
						<dd>Lead Programmer</dd>
						<dd>Jan 2017 - Present</dd>
				</dl>
			</article>
			<article id="skills" className="boxshadow green-bg light-blue">
				<h2><i className="material-icons">tv</i> Skills</h2>
				<table sortable id="sort" className="sort">
					<tr>
						<th>Skill</th>
						<th>Novice</th>
						<th>Pretty Good</th>
						<th>Excellent</th>
						<th>Expert</th>
					</tr>
					<tbody>
						{/* <Skill name="Cuda" years="1" /> */}
						<tr>
							<th>Cuda</th>
							<td colspan="1">1 year of experience</td>
							<td></td>
							<td></td>
							<td></td>
						</tr>
						<tr>
							<th>Open CL</th>
							<td colspan="1">1 year of experience</td>
							<td></td>
							<td></td>
							<td></td>
						</tr>
						<tr>
							<th>Open GL</th>
							<td colspan="1">1 year of experience</td>
							<td></td>
							<td></td>
							<td></td>
						</tr>
						<tr>
							<th>GLSL Shaders</th>
							<td colspan="2">1.5 years of experience</td>
							<td></td>
							<td></td>
						</tr>
						<tr>
							<th>Web Design/Development</th>
							<td colspan="3">5 years of experience</td>
							<td></td>
						</tr>
						<tr>
							<th>HTML</th>
							<td colspan="3">5 years of experience</td>
							<td></td>
						</tr>
						<tr>
							<th>CSS</th>
							<td colspan="3">5 years of experience</td>
							<td></td>
						</tr>
						<tr>
							<th>PHP</th>
							<td colspan="2">3 years of experience</td>
							<td></td>
							<td></td>
						</tr>
						<tr>
							<th>Node.js</th>
							<td colspan="2">3 years of experience</td>
							<td></td>
							<td></td>
						</tr>
						<tr>
							<th>Javascript</th>
							<td colspan="2">3 years of experience</td>
							<td></td>
							<td></td>
						</tr>
						<tr>
							<th>Mobile Software Development</th>
							<td colspan="1">1 year of experience</td>
							<td></td>
							<td></td>
							<td></td>
						</tr>
						<tr>
							<th>Java</th>
							<td colspan="2">5 years of experience</td>
							<td></td>
							<td></td>
						</tr>
						<tr>
							<th>C++</th>
							<td colspan="3">5 years of experience</td>
							<td></td>
						</tr>
						<tr>
							<th>C#</th>
							<td colspan="3">4 years of experience</td>
							<td></td>
						</tr>
						<tr>
							<th>Python</th>
							<td colspan="2">3 years of experience</td>
							<td></td>
							<td></td>
						</tr>
						<tr>
							<th>Haskell</th>
							<td colspan="1">1 year of experience</td>
							<td></td>
							<td></td>
							<td></td>
						</tr>
						<tr>
							<th>x86 Assembly</th>
							<td colspan="1">1.5 years of experience</td>
							<td></td>
							<td></td>
							<td></td>
						</tr>
						<tr>
							<th>Game Development</th>
							<td colspan="3">6 years of experience</td>
							<td></td>
						</tr>
						<tr>
							<th>Unity</th>
							<td colspan="3">4 years of experience</td>
							<td></td>
						</tr>
						<tr>
							<th>Information Technology</th>
							<td colspan="2">5 years of experience</td>
							<td></td>
							<td></td>
						</tr>
						<tr>
							<th>Microsoft Office Programs</th>
							<td colspan="2">8 years of experience</td>
							<td></td>
							<td></td>
						</tr>
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
		</main>
	);
}