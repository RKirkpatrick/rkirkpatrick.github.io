import React from 'react';
import { Route, Switch, useRouteMatch } from "react-router-dom";
import NotFound from '../NotFound';
import CS290 from './cs290';

export default function Project({pageTitle}) {
	const {path, url, params} = useRouteMatch();
	console.log(useRouteMatch());

	return (
		<>
			<Switch>
				<Route path={`${path}/cs290`}>
					<p>Test</p>
					<CS290 />
				</Route>
				<Route path="*">
					<NotFound />
				</Route>
			</Switch>
		</>
	);
}