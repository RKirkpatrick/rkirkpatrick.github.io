import React from "react";
import { Link } from "react-router-dom";
import { projectRoutes } from "../Projects";
import DarkmodeToggle from "./Darkmode";
import { ExtLink } from "./ExtLink";
import { HashLink } from "react-router-hash-link";

export default function Header() {
	// function toggleNav({ target: button }) {
	// 	let menu = document.getElementById("menu-parent");
	// 	if (button) {
	// 		button.classList.toggle("toggled-on");
	// 	}
	// 	menu.classList.toggle("toggled-on");
	// 	document.getElementById("pages").classList.toggle("toggled-on");
	// 	document.body.classList.toggle("stop-scrolling");
	// }

	function openNav() {
		document.getElementById("menu-parent").classList.add("toggled-on");
		document.getElementById("pages").classList.add("toggled-on");
		document.body.classList.add("stop-scrolling");
	}

	function closeNav() {
		document.getElementById("menu-parent").classList.remove("toggled-on");
		document.getElementById("pages").classList.remove("toggled-on");
		document.body.classList.remove("stop-scrolling");
	}

	function callOnEnter(keyPressed, callback) {
		if (keyPressed.code === "Enter") {
			callback();
		}
	}

	// combine project routes into mega menu: https://www.w3schools.com/howto/howto_css_mega_menu.asp
	function getProjectHTML() {
		return (
			<ul className="dropdown-content">
				<div className="row">
					{Object.keys(projectRoutes).map((category, index) => (
						<ul className="column" key={index}>
							<h3 className="title">{category}</h3>
							{projectRoutes[category].map((route, index2) => (
								<li key={index2} hidden={route.hidden}>
									<Link to={route.path} onClick={closeNav}>
										{route.title}
									</Link>
								</li>
							))}
						</ul>
					))}
				</div>
			</ul>
		);
	}

	return (
		<header>
			<div id="skip">
				<HashLink smooth to="/#top" tabIndex={1}>
					Skip Navigation
				</HashLink>
			</div>
			<p
				id="menu-button"
				className="menu-toggle"
				onClick={openNav}
				onKeyDown={(key) => callOnEnter(key, openNav)}
				tabIndex={1}
			>
				<i className="material-icons md-40">menu</i>
			</p>
			<p id="logo">
				<Link to="/" onClick={closeNav} tabIndex={2}>
					{process.env.REACT_APP_AUTHOR}
				</Link>
			</p>
			<nav id="pages" className="overlay">
				<div
					className="closebtn"
					onClick={closeNav}
					onKeyDown={(key) => callOnEnter(key, closeNav)}
					tabIndex={3}
				>
					&times;
				</div>
				<p id="logo">
					<Link to="/" onClick={closeNav}>
						{process.env.REACT_APP_AUTHOR}
					</Link>
				</p>
				<ul id="menu-parent" className="menu overlay-content">
					<li className="dropdown">
						<HashLink smooth to="/#about" onClick={closeNav}>
							About <i className="fas fa-angle-down arrow"></i>
						</HashLink>
						<ul className="dropdown-content">
							<li>
								<HashLink smooth to="/#education" onClick={closeNav}>
									Education
								</HashLink>
							</li>
							<li>
								<a href="/#work" onClick={closeNav}>
									Work
								</a>
							</li>
							<li>
								<HashLink smooth to="/#skills" onClick={closeNav}>
									Skills
								</HashLink>
							</li>
						</ul>
					</li>
					<li className="dropdown-mega projects">
						<a href="/#featured">
							Projects <i className="fas fa-angle-down arrow"></i>
						</a>
						{getProjectHTML()}
						{/* <ul className="dropdown-content">
							{routes.map((route, index) => (
								<li key={index} hidden={route.hidden}>
									<Link to={route.path} onClick={closeNav}>
										{route.title}
									</Link>
								</li>
							))}
						</ul> */}
					</li>
					<li className="dropdown">
						<ExtLink
							to="https://www.linkedin.com/in/ryan-kirkpatrick-28310b176/"
							onClick={closeNav}
						>
							Social <i className="fas fa-angle-down arrow"></i>
						</ExtLink>
						<ul className="dropdown-content">
							<li>
								<ExtLink
									to="https://www.linkedin.com/in/ryan-kirkpatrick-28310b176/"
									onClick={closeNav}
								>
									<i className="fab fa-linkedin-in"></i> LinkedIn
								</ExtLink>
							</li>
							<li>
								<ExtLink to="https://github.com/Kirkpary" onClick={closeNav}>
									<i className="fab fa-github"></i> School Github
								</ExtLink>
							</li>
							<li>
								<ExtLink
									to="https://github.com/RKirkpatrick"
									onClick={closeNav}
								>
									<i className="fab fa-github"></i> Personal Github
								</ExtLink>
							</li>
							{/* <li>
								<ExtLink
									to="https://www.hackerrank.com/ryank1"
									onClick={closeNav}
								>
									<i className="fab fa-hackerrank"></i> HackerRank
								</ExtLink>
							</li> */}
						</ul>
					</li>
					<li>
						<Link to="/contact" onClick={closeNav}>
							Contact
						</Link>
					</li>
					<DarkmodeToggle />
				</ul>
			</nav>
			<br className="clear" />
		</header>
	);
}
