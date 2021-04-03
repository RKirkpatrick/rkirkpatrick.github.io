import React from 'react';
import { Route, Switch } from "react-router-dom";
import NotFound from '../NotFound';
import CS290 from './cs290';

export default function Project() {
	return (
		<>
			<Switch>
				<Route path='/cs290' component={CS290} />
				<Route component={NotFound} />
			</Switch>
		</>
	);
}