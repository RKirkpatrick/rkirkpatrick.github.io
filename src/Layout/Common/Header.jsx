import React from "react";
import { Link } from "react-router-dom";
import { routes } from "../Projects";

export default function Header() {
	return (
		<header>
			<p id="logo">
				<Link to="/">{process.env.REACT_APP_AUTHOR}</Link>
			</p>
			<nav id="pages" className="">
				<p id="menu-button" className="menu-toggle">
					<i className="material-icons md-40">menu</i>
				</p>
				<ul className="parent">
					<li className="dropdown">
						<a href="/#about" className="scroll" data-speed="500">
							About &#9660;
						</a>
						<ul className="children">
							<li>
								<a href="/#education" className="scroll" data-speed="500">
									Education
								</a>
							</li>
							<li>
								<a href="/#work" className="scroll" data-speed="500">
									Work
								</a>
							</li>
							<li>
								<a href="/#skills" className="scroll" data-speed="500">
									Skills
								</a>
							</li>
						</ul>
					</li>
					<li className="dropdown">
						<Link to="" className="scroll" data-speed="500">
							Projects &#9660;
						</Link>
						<ul className="children">
							{routes.map((route, index) => (
								<li key={index} {...(route.title ? `hidden` : null)}>
									<Link to={route.path}>{route.title}</Link>
								</li>
							))}
						</ul>
					</li>
					<li className="dropdown">
						<a
							href="https://www.linkedin.com/in/ryan-kirkpatrick-28310b176/"
							target="_blank"
							rel="noopener noreferrer"
						>
							Social &#9660;
						</a>
						<ul className="children">
							<li>
								<a
									href="https://www.linkedin.com/in/ryan-kirkpatrick-28310b176/"
									target="_blank"
									rel="noopener noreferrer"
								>
									<i className="fa fa-linkedin"></i> LinkedIn
								</a>
							</li>
							<li>
								<a
									href="https://github.com/Kirkpary"
									target="_blank"
									rel="noopener noreferrer"
								>
									<i className="fa fa-github"></i> School Github
								</a>
							</li>
							<li>
								<a
									href="https://github.com/RKirkpatrick"
									target="_blank"
									rel="noopener noreferrer"
								>
									<i className="fa fa-github"></i> Personal Github
								</a>
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
