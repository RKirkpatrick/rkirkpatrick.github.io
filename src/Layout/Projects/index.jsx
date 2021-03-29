import React from 'react';
import { Route, Switch } from "react-router-dom";
import NotFound from '../NotFound';
import CS290 from './cs290';

export default function Project({pageTitle}) {
	return (
		<>
			<Switch>
				<Route path="/cs290">
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