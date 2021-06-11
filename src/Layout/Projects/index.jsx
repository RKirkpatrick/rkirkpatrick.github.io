import React from "react";
import { Route, Switch } from "react-router-dom";
import NotFound from "../NotFound";
import CS290 from "./cs290";
import CS195 from "./cs195";

export const routes = [
	{
		path: "/projects/cs290",
		component: CS290,
		title: "Web Development",
	},
	{
		path: "/projects/cs195",
		component: CS195,
		title: "Web Design",
	},
];

export default function Project() {
	return (
		<>
			<Switch>
				{routes.map((route, index) => (
					<Route
						key={index}
						path={route.path}
						component={route.component}
						exact={route.exact}
					/>
				))}
				<Route path="*" component={NotFound} />
			</Switch>
		</>
	);
}
