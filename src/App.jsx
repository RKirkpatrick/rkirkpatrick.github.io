import hljs from "highlight.js/lib/common";
import "highlight.js/styles/default.css";
import React, { useEffect } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import "./App.css";
import Layout from "./Layout";

function App() {
	function getPath() {
		let path = localStorage.getItem("path");
		if (path) {
			localStorage.removeItem("path");
			return <Redirect to={path} />;
		}
	}

	useEffect(() => {
		document.querySelectorAll("pre code").forEach((element) => {
			hljs.highlightElement(element);
		});
	}, []);

	return (
		<>
			{getPath()}
			<Switch>
				<Route path="/">
					<Layout />
				</Route>
			</Switch>
		</>
	);
}

export default App;
