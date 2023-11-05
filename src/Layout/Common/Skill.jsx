import React from "react";

export default function Skill({
	name,
	years = 0,
	yearLearned = undefined,
	logoSrc = "",
	fontAwesome = "",
	imgClass = "",
}) {
	let logos = [];
	let i = 0;
	// years = years ? years : new Date().getFullYear() - yearLearned;

	if (fontAwesome) {
		for (i = 0; i < years; i++) {
			logos.push(
				<i
					className={`fab ${fontAwesome}`}
					style={{ fontSize: "2em", marginRight: ".1em" }}
					key={i}
				/>
			);
		}
	} else if (logoSrc) {
		for (i = 0; i < years; i++) {
			logos.push(
				<img
					className={imgClass}
					src={logoSrc}
					alt={`${logoSrc}`}
					width="35em"
					key={i}
				/>
			);
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
