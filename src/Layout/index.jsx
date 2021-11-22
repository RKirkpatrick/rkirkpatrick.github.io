import React from "react";
import { Route, Switch } from "react-router-dom";
import Header from "./Common/Header";
import Footer from "./Common/Footer";
import NotFound from "./NotFound";
import About from "./About";
import Contact from "./Contact";
import Project from "./Projects";

export default function Layout() {
	return (
		<>
			<Header />
			<main id="top">
				<Switch>
					<Route path="/projects">
						<Project />
					</Route>
					<Route path="/contact">
						<Contact />
					</Route>
					<Route exact path="/">
						<About />
					</Route>
					<Route path="*" status={404}>
						<NotFound />
					</Route>
				</Switch>
			</main>
			<Footer />
		</>
	);
}
