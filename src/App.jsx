import hljs from "highlight.js/lib/common";
import "highlight.js/styles/default.css";
import React, { useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import Layout from "./Layout";

function App() {
	useEffect(() => {
		document.querySelectorAll("pre code").forEach((element) => {
			console.log("Block:", element);
			hljs.highlightElement(element);
		});
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
