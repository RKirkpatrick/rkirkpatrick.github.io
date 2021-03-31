import React from 'react';
import {Link} from 'react-router-dom';

export default function Header() {
	return (
		<header>
			<p id="logo"><Link to="/">{process.env.REACT_APP_AUTHOR}</Link></p>
			<nav id="pages" className="">
				<p id="menu-button" className="menu-toggle"><i className="material-icons md-40">menu</i></p>
				<ul className="parent">
					<li className="dropdown"><a href="/#about" className="scroll" data-speed="500">About &#9660;</a><ul className="children">
						<li><a href="/#education" className="scroll" data-speed="500">Education</a></li>
						<li><a href="/#work" className="scroll" data-speed="500">Work</a></li>
						<li><a href="/#skills" className="scroll" data-speed="500">Skills</a></li>
					</ul>
					</li>
					<li className="dropdown"><Link to="" className="scroll" data-speed="500">Projects &#9660;</Link><ul className="children">
						<li hidden><Link to="/projects/template">Template</Link></li>
						<li><Link to="/projects/spacegame">Space Survival Game</Link></li>
						<li><Link to="/projects/guitar-hero">Arduino Guitar Hero Controller</Link></li>
						<li><Link to="/projects/cs46x">Capstone</Link></li>
						<li hidden><Link to="/projects/cs492">Mobile Software Development</Link></li>
						<li hidden><Link to="/projects/cs475">Intro to Parallel Programming</Link></li>
						<li><Link to="/projects/cs458">Intro to Info Visualization</Link></li>
						<li><Link to="/projects/cs457">Computer Graphics Shaders</Link></li>
						<li><Link to="/projects/cs450">Intro to Computer Graphics</Link></li>
						<li><Link to="/projects/cs362">Software Engineering II</Link></li>
						<li><Link to="/projects/cs361">Software Engineering I</Link></li>
						<li hidden><Link to="/projects/cs444">Operating Systems II</Link></li>
						<li hidden><Link to="/projects/cs344">Operating Systems I</Link></li>
						<li><Link to="/projects/cs340">Intro to Databases</Link></li>
						<li hidden><Link to="/projects/cs331">Intro to Artificial Intelligence</Link></li>
						<li><Link to="/projects/cs290">Web Development</Link></li>
						<li><Link to="/projects/cs195">Web Design</Link></li>
						</ul>
					</li>
					<li className="dropdown"><a href="https://www.linkedin.com/in/ryan-kirkpatrick-28310b176/" target="_blank" rel="noopener noreferrer">Social &#9660;</a><ul className="children">
							<li><a href="https://www.linkedin.com/in/ryan-kirkpatrick-28310b176/" target="_blank" rel="noopener noreferrer"><i className="fa fa-linkedin"></i>  LinkedIn</a></li>
							<li><a href="https://github.com/Kirkpary" target="_blank" rel="noopener noreferrer"><i className="fa fa-github"></i>  School Github</a></li>
							<li><a href="https://github.com/RKirkpatrick" target="_blank" rel="noopener noreferrer"><i className="fa fa-github"></i>  Personal Github</a></li>
						</ul>
					</li>
					<li><Link to="/contact">Contact</Link></li>
					<li hidden><p id="darkmode">Dark Mode</p></li>
				</ul>
			</nav>
			<br className="clear" />
		</header>
	);
}