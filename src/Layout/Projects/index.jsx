import React from "react";
import { Route, Switch } from "react-router-dom";
import NotFound from "../NotFound";
import CS290 from "./cs290";
import CS195 from "./cs195";
import CS46X from "./cs46x";
import spacegame from "./spacegame";
import GuitarHero from "./guitarHero";
import CS458 from "./cs458";

export const routes = [
	{
		path: "/projects/guitar-hero",
		component: GuitarHero,
		title: "Arduino Guitar Hero Controller",
	},
	{
		path: "/projects/spacegame",
		component: spacegame,
		title: "Earth's Last Hope",
	},
	// {
	// 	path: "/projects/cs492",
	// 	component: CS492,
	// 	title: "Mobile Software Development",
	// },
	// {
	// 	path: "/projects/cs475",
	// 	component: CS475,
	// 	title: "Intro to Parallel Programming",
	// },
	{
		path: "/projects/cs46x",
		component: CS46X,
		title: "Capstone",
	},
	{
		path: "/projects/cs458",
		component: CS458,
		title: "Intro to Info Visualization",
	},
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
						render={() => {
							return React.createElement(route.component, {
								title: route.title,
							});
						}}
						exact={route.exact}
					/>
				))}
				<Route path="*" component={NotFound} />
			</Switch>
		</>
	);
}
