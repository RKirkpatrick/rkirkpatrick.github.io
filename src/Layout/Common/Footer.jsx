//TODO fix print css

import React from "react";
import { HashLink } from "react-router-hash-link";

export default function Footer() {
	return (
		<div>
			<footer className="boxshadow">
				<ul className="updated">
					<li>
						<cite>
							&copy; 2020-{new Date().getFullYear()}{" "}
							{process.env.REACT_APP_AUTHOR}
						</cite>
					</li>
					{/* <li id="print">
						<i
							class="fas fa-print"
							onClick={() => {
								window.print();
								return false;
							}}
							title="Opens the print dialog box."
						></i>
					</li> */}
					<li>
						<HashLink smooth to={"#top"}>
							<i className="fas fa-arrow-up"></i>
						</HashLink>
					</li>
				</ul>
			</footer>
		</div>
	);
}
