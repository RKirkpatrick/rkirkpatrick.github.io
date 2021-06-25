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
		document.getElementById("pages").classList.toggle("toggled-on");
		document.body.classList.toggle("stop-scrolling");
	}

	//TODO change projects to mega menu: https://www.w3schools.com/howto/howto_css_mega_menu.asp
	return (
		<header className="boxshadow">
			<p id="logo">
				<Link to="/" onClick={toggleNav}>
					{process.env.REACT_APP_AUTHOR}
				</Link>
			</p>
			<p id="menu-button" className="menu-toggle" onClick={toggleNav}>
				<i className="material-icons md-40">menu</i>
			</p>
			<nav id="pages" className="overlay">
				<div className="closebtn" onClick={toggleNav}>
					&times;
				</div>
				<p id="logo">
					<Link to="/" onClick={toggleNav}>
						{process.env.REACT_APP_AUTHOR}
					</Link>
				</p>
				<ul id="menu-parent" className="parent overlay-content">
					<li className="dropdown">
						<Link
							to="/#about"
							onClick={toggleNav}
							className="scroll"
							data-speed="500"
						>
							About &#9660;
						</Link>
						<ul className="children">
							<li>
								<Link
									to="/#education"
									onClick={toggleNav}
									className="scroll"
									data-speed="500"
								>
									Education
								</Link>
							</li>
							<li>
								<Link
									to="/#work"
									onClick={toggleNav}
									className="scroll"
									data-speed="500"
								>
									Work
								</Link>
							</li>
							<li>
								<Link
									to="/#skills"
									onClick={toggleNav}
									className="scroll"
									data-speed="500"
								>
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
									<Link to={route.path} onClick={toggleNav}>
										{route.title}
									</Link>
								</li>
							))}
						</ul>
					</li>
					<li className="dropdown">
						<ExtLink
							to="https://www.linkedin.com/in/ryan-kirkpatrick-28310b176/"
							onClick={toggleNav}
						>
							Social &#9660;
						</ExtLink>
						<ul className="children">
							<li>
								<ExtLink
									to="https://www.linkedin.com/in/ryan-kirkpatrick-28310b176/"
									onClick={toggleNav}
								>
									<i className="fa fa-linkedin"></i> LinkedIn
								</ExtLink>
							</li>
							<li>
								<ExtLink to="https://github.com/Kirkpary" onClick={toggleNav}>
									<i className="fa fa-github"></i> School Github
								</ExtLink>
							</li>
							<li>
								<ExtLink
									to="https://github.com/RKirkpatrick"
									onClick={toggleNav}
								>
									<i className="fa fa-github"></i> Personal Github
								</ExtLink>
							</li>
						</ul>
					</li>
					<li>
						<Link to="/contact" onClick={toggleNav}>
							Contact
						</Link>
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
