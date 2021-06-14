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
								<li key={index}>
									<Link to={route.path}>{route.title}</Link>
								</li>
							))}
						</ul>
					</li>
					<li className="dropdown">
						<Link
							to="https://www.linkedin.com/in/ryan-kirkpatrick-28310b176/"
							target="_blank"
						>
							Social &#9660;
						</Link>
						<ul className="children">
							<li>
								<Link
									to="https://www.linkedin.com/in/ryan-kirkpatrick-28310b176/"
									target="_blank"
								>
									<i className="fa fa-linkedin"></i> LinkedIn
								</Link>
							</li>
							<li>
								<Link to="https://github.com/Kirkpary" target="_blank">
									<i className="fa fa-github"></i> School Github
								</Link>
							</li>
							<li>
								<Link to="https://github.com/RKirkpatrick" target="_blank">
									<i className="fa fa-github"></i> Personal Github
								</Link>
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
