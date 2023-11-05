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
		var root = document.documentElement;
		if (isDarkmode) {
			localStorage["darkmode"] = "true";
			root.classList.add("darkmode");
			document.documentElement.style.setProperty(
				"--backgroundcolor",
				"#1A1A1A"
			);
			document.documentElement.style.setProperty("--textcolor", "white");
			document.documentElement.style.setProperty(
				"--boxshadowcolor",
				"rgba(255,255,255,1)"
			);
			document.documentElement.style.setProperty("--textboxfocuscolor", "");
			document.documentElement.style.setProperty("--navbackground", "#1A1A1A");
			document.documentElement.style.setProperty(
				"--navbackgroundhover",
				"#1A1A1A"
			);
			document.documentElement.style.setProperty("--navtext", "white");
			document.documentElement.style.setProperty("--navtexthover", "white");
			document.documentElement.style.setProperty("--navtextactive", "");
			document.documentElement.style.setProperty(
				"--navchildbackground",
				"#1A1A1A"
			);
			document.documentElement.style.setProperty(
				"--navchildbackgroundhover",
				""
			);
			document.documentElement.style.setProperty("--navchildtext", "");
			document.documentElement.style.setProperty("--navchildtexthover", "");
			document.documentElement.style.setProperty("--navchildtextactive", "");
			document.documentElement.style.setProperty(
				"--neumorphic-br",
				"rgba(0,0,0,0.7)"
			);
			document.documentElement.style.setProperty(
				"--neumorphic-tl",
				"rgba(58,58,58,0.7)"
			);
		} else {
			localStorage["darkmode"] = "false";
			root.classList.remove("darkmode");
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
			document.documentElement.style.setProperty("--neumorphic-tl", "");
			document.documentElement.style.setProperty("--neumorphic-br", "");
		}
	}, [isDarkmode]);

	return (
		<div className="light-container">
			<input
				className="light-toggle"
				type="checkbox"
				onClick={() => setDarkmode(!isDarkmode)}
				checked={!isDarkmode}
				aria-label="Light mode toggle"
				readOnly
			/>
		</div>
	);
}
