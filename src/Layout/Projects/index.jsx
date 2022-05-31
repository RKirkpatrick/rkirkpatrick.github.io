import React from "react";
import { Helmet } from "react-helmet-async";
import { Route, Switch } from "react-router-dom";
import NotFound from "../NotFound";
import spacegame from "./spacegame";
import GuitarHero from "./guitarHero";
import Portfolio from "./portfolio";
import CS46X from "./cs46x";
import CS492 from "./cs492";
// import CS475 from "./cs475";
import CS458 from "./cs458";
import CS457 from "./cs457";
import CS450 from "./cs450";
import CS362 from "./cs362";
import CS361 from "./cs361";
// import CS344 from "./cs344";
import CS290 from "./cs290";
import CS195 from "./cs195";
import CS340 from "./cs340";
import CS499 from "./cs499";
import CS493 from "./cs493";
// import CS331 from "./cs331";
import Raedam from "./raedam";
import RaedamAbout from "./raedamAbout";

// if adding more categories change --project-menu-columns variable in App.css
export const projectRoutes = {
	School: [
		{
			path: "/projects/cs46x",
			component: CS46X,
			title: "Capstone: MMO Expo",
		},
		{
			path: "/projects/cs499",
			component: CS499,
			title: "Virtual & Augmented Reality",
		},
		{
			path: "/projects/cs493",
			component: CS493,
			title: "Cloud Application Development",
		},
		{
			path: "/projects/cs492",
			component: CS492,
			title: "Mobile Software Development",
		},
		// {
		// 	path: "/projects/cs475",
		// 	component: CS475,
		// 	title: "Intro to Parallel Programming",
		// },
		{
			path: "/projects/cs458",
			component: CS458,
			title: "Intro to Info Visualization",
		},
		{
			path: "/projects/cs457",
			component: CS457,
			title: "Computer Graphics Shaders",
		},
		{
			path: "/projects/cs450",
			component: CS450,
			title: "Intro to Computer Graphics",
		},
		{
			path: "/projects/cs362",
			component: CS362,
			title: "Software Engineering II",
		},
		{
			path: "/projects/cs361",
			component: CS361,
			title: "Software Engineering I",
		},
		// {
		// 	path: "/projects/cs344",
		// 	component: CS344,
		// 	title: "Operating Systems I",
		// },
		// {
		// 	path: "/projects/cs444",
		// 	component: CS444,
		// 	title: "Operating Systems II",
		// },
		{
			path: "/projects/cs340",
			component: CS340,
			title: "Intro to Databases",
		},
		// {
		// 	path: "/projects/cs331",
		// 	component: CS331,
		// 	title: "Intro to Artificial Intelligence",
		// },
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
	],
	Personal: [
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
		{
			path: "/projects/portfolio",
			component: Portfolio,
			title: "Portfolio",
		},
	],
	Business: [
		{
			path: "/projects/raedam",
			component: Raedam,
			title: "Raedam Parking Sensor Manager",
		},
		{
			path: "/projects/raedam-about",
			component: RaedamAbout,
			title: "Raedam About Pages",
		},
	],
};

function getRoute(route, key) {
	return (
		<Route
			key={key}
			path={route.path}
			render={() => {
				return (
					<>
						<Helmet>
							<title>{`${route.title} - ${process.env.REACT_APP_AUTHOR} - ${process.env.REACT_APP_SLOGAN}`}</title>
						</Helmet>
						{React.createElement(route.component, {
							title: route.title,
						})}
					</>
				);
			}}
			exact={route.exact}
		/>
	);
}

export default function Project() {
	return (
		<>
			<Switch>
				{Object.keys(projectRoutes).map((category, index) =>
					projectRoutes[category].map((route, key) =>
						getRoute(route, `${index}${key}`)
					)
				)}
				<Route key="error" path="*" component={NotFound} />
			</Switch>
		</>
	);
}
