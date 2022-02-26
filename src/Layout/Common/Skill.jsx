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
			logos.push(<i className={`fab ${fontAwesome}`} style={{fontSize: "2em"}} />);
		}
	} else if (logoSrc) {
		for (let i = 0; i < years; i++) {
			logos.push(<img src={logoSrc} alt={`${logoSrc}`} width="35em" />);
		}
	}

	return (
		<div className="flex-item">
			<h4 className="aligncenter">{name}</h4>
			<div className="aligncenter">{logos}</div>
		</div>
	);
}
