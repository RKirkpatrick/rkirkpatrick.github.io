import React from 'react';

export default function Skill({name, years, colSpan}) {
	let yearStr = years > 1 ? "years" : "year";
	let columns = [];

	for (let i = 0; i < 4-colSpan; i++) {
		columns.push(<td key={i}></td>);
	}

	return (
		<tr>
			<th>{name}</th>
			<td colSpan={colSpan}>{years} {yearStr} of experience</td>
			{columns}
		</tr>
	);
}