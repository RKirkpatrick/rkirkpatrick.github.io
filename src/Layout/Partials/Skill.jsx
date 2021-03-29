import React from 'react';

export default function Skill({name, years, colspan}) {
	let yearStr = years > 1 ? "years" : "year";
	let columns = [];

	for (let i = 0; i < 4-colspan; i++) {
		columns.push(<td></td>);
	}

	return (
		<tr>
			<th>{name}</th>
			<td colspan={colspan}>{years} {yearStr} of experience</td>
			{columns}
		</tr>
	);
}