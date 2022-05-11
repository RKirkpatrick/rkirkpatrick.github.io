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
export default function Skill({
	name,
	years = 0,
	yearLearned = undefined,
	logoSrc = "",
	fontAwesome = "",
}) {
	let logos = [];
	let i = 0;
	years = yearLearned ? new Date().getFullYear() - yearLearned : years;

	if (fontAwesome) {
		for (i = 0; i < years; i++) {
			logos.push(
				<i
					className={`fab ${fontAwesome}`}
					style={{ fontSize: "2em" }}
					key={i}
				/>
			);
		}
	} else if (logoSrc) {
		for (i = 0; i < years; i++) {
			logos.push(<img src={logoSrc} alt={`${logoSrc}`} width="35em" key={i} />);
		}
	}

	return (
		<div className="flex-item">
			<h4 className="aligncenter">{name}</h4>
			<div className="aligncenter" style={{ width: `${(i + 1) * 2}em` }}>
				{logos}
			</div>
		</div>
	);
}
