import { useEffect, useState } from "react";
import "./Darkmode.css";

export default function DarkmodeToggle() {
	if (localStorage["darkmode"] === undefined) {
		localStorage["darkmode"] = "false";
	}

	let [isDarkmode, setDarkmode] = useState(
		localStorage["darkmode"] === "true" ? true : false
	);

	useEffect(() => {
		console.log("Darkmode changed");
		if (isDarkmode) {
			localStorage["darkmode"] = "true";
			document.documentElement.style.setProperty("--backgroundcolor", "black");
			document.documentElement.style.setProperty("--textcolor", "white");
			document.documentElement.style.setProperty(
				"--boxshadowcolor",
				"rgba(255,255,255,1)"
			);
			document.documentElement.style.setProperty("--textboxfocuscolor", "");
			document.documentElement.style.setProperty("--navbackground", "black");
			document.documentElement.style.setProperty("--navbackgroundhover", "");
			document.documentElement.style.setProperty("--navtext", "white");
			document.documentElement.style.setProperty("--navtexthover", "");
			document.documentElement.style.setProperty("--navtextactive", "");
			document.documentElement.style.setProperty("--navchildbackground", "");
			document.documentElement.style.setProperty(
				"--navchildbackgroundhover",
				""
			);
			document.documentElement.style.setProperty("--navchildtext", "");
			document.documentElement.style.setProperty("--navchildtexthover", "");
			document.documentElement.style.setProperty("--navchildtextactive", "");
		} else {
			localStorage["darkmode"] = "false";
			document.documentElement.style.setProperty("--backgroundcolor", "");
			document.documentElement.style.setProperty("--textcolor", "");
			document.documentElement.style.setProperty("--boxshadowcolor", "");
			document.documentElement.style.setProperty("--textboxfocuscolor", "");
			document.documentElement.style.setProperty("--navbackground", "");
			document.documentElement.style.setProperty("--navbackgroundhover", "");
			document.documentElement.style.setProperty("--navtext", "");
			document.documentElement.style.setProperty("--navtexthover", "");
			document.documentElement.style.setProperty("--navtextactive", "");
			document.documentElement.style.setProperty("--navchildbackground", "");
			document.documentElement.style.setProperty(
				"--navchildbackgroundhover",
				""
			);
			document.documentElement.style.setProperty("--navchildtext", "");
			document.documentElement.style.setProperty("--navchildtexthover", "");
			document.documentElement.style.setProperty("--navchildtextactive", "");
		}
	}, [isDarkmode]);

	return (
		<div class="light-container">
			<input
				className="light-toggle"
				type="checkbox"
				onClick={() => setDarkmode(!isDarkmode)}
				checked={!isDarkmode}
				readOnly
			/>
		</div>
	);
}
