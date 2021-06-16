import hljs from "highlight.js/lib/common";
import "highlight.js/styles/default.css";
import React, { useEffect } from "react";
import { Redirect, Route, Switch, useHistory } from "react-router-dom";
import "./App.css";
import Layout from "./Layout";

function App() {
	let history = useHistory();
	useEffect(() => {
		document.querySelectorAll("pre code").forEach((element) => {
			hljs.highlightElement(element);
		});
		let path = localStorage.getItem("path");
		console.log("Path:", path);
		if (path) {
			localStorage.removeItem("path");
			history.replace(path);
		}
	}, []);

	return (
		<>
			<Switch>
				<Route path="/">
					<Layout />
				</Route>
			</Switch>
		</>
	);
}

export default App;
