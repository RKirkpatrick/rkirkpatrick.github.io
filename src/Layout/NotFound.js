import React from 'react';
import {Link} from 'react-router-dom';

export default function NotFound() {
	return (
		<article class="alignmiddle boxshadow">
			<h1>Page Not Found</h1>
			<p>The page you were looking for doesn't exist. Return to the <Link to="/">Portfolio</Link>.</p>
		</article>
	);
}