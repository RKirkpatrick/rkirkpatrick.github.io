import React from "react";

// export default function Skill({ name, years, colSpan }) {
// 	let yearStr = years > 1 ? "years" : "year";
// 	let columns = [];

// 	for (let i = 0; i < 4 - colSpan; i++) {
// 		columns.push(<td key={i}></td>);
// 	}

// 	return (
// 		<tr>
// 			<th>{name}</th>
// 			<td colSpan={colSpan}>
// 				{years} {yearStr} of experience
// 			</td>
// 			{columns}
// 		</tr>
// 	);
// }
export default function Skill({ name, years, logoSrc = "", fontAwesome = "" }) {
	let logos = [];

	if (fontAwesome) {
		for (let i = 0; i < years; i++) {
			logos.push(<i className={`fab ${fontAwesome}`} />);
		}
	} else if (logoSrc) {
	}

	return (
		<div>
			<h4 className="aligncenter">{name}</h4>
			<div className="aligncenter">{logos}</div>
		</div>
	);
}
