import React from 'react';
import { Route, Switch } from "react-router-dom";
import Header from './Partials/Header';
import Footer from './Partials/Footer';
import NotFound from './NotFound';
import About from './About';
import Contact from './Contact';
import Project from './Projects';

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
					<Route path="/" exact={true}>
						<About />
					</Route>
					<Route path="*" status={404}>
						<NotFound />
					</Route>
				</Switch>
			</main>
			<Footer />
			<p className="warning aligncenter">This website is under construction: Some pages may be missing information.</p>
		</>
	);
}