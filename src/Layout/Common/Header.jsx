import React from "react";
import { Link } from "react-router-dom";
import { routes } from "../Projects";
import { ExtLink } from "./ExtLink";

export default function Header() {
	//TODO add fullscreen hamburger menu and improve mobile menu
	function toggleNav({ target: button }) {
		let menu = document.getElementById("menu-parent");
		if (button) {
			button.classList.toggle("toggled-on");
		}
		menu.classList.toggle("toggled-on");
		//document.body.classList.toggle("stop-scrolling");
	}

	return (
		<header>
			<p id="logo">
				<Link to="/">{process.env.REACT_APP_AUTHOR}</Link>
			</p>
			<nav id="pages" className="">
				<p id="menu-button" className="menu-toggle" onClick={toggleNav}>
					<i className="material-icons md-40">menu</i>
				</p>
				<ul id="menu-parent" className="parent">
					<li className="dropdown">
						<Link to="/#about" className="scroll" data-speed="500">
							About &#9660;
						</Link>
						<ul className="children">
							<li>
								<Link to="/#education" className="scroll" data-speed="500">
									Education
								</Link>
							</li>
							<li>
								<Link to="/#work" className="scroll" data-speed="500">
									Work
								</Link>
							</li>
							<li>
								<Link to="/#skills" className="scroll" data-speed="500">
									Skills
								</Link>
							</li>
						</ul>
					</li>
					<li className="dropdown">
						<Link to="" className="scroll" data-speed="500">
							Projects &#9660;
						</Link>
						<ul className="children">
							{routes.map((route, index) => (
								<li key={index} hidden={route.hidden}>
									<Link to={route.path}>{route.title}</Link>
								</li>
							))}
						</ul>
					</li>
					<li className="dropdown">
						<ExtLink to="https://www.linkedin.com/in/ryan-kirkpatrick-28310b176/">
							Social &#9660;
						</ExtLink>
						<ul className="children">
							<li>
								<ExtLink to="https://www.linkedin.com/in/ryan-kirkpatrick-28310b176/">
									<i className="fa fa-linkedin"></i> LinkedIn
								</ExtLink>
							</li>
							<li>
								<ExtLink to="https://github.com/Kirkpary">
									<i className="fa fa-github"></i> School Github
								</ExtLink>
							</li>
							<li>
								<ExtLink to="https://github.com/RKirkpatrick">
									<i className="fa fa-github"></i> Personal Github
								</ExtLink>
							</li>
						</ul>
					</li>
					<li>
						<Link to="/contact">Contact</Link>
					</li>
					<li hidden>
						<p id="darkmode">Dark Mode</p>
					</li>
				</ul>
			</nav>
			<br className="clear" />
		</header>
	);
}
