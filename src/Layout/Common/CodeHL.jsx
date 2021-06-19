import hljs from "highlight.js/lib/common";
import { useEffect, useState } from "react";

const CodeHL = ({ children }) => {
	const [code, setCode] = useState("");
	const [language, setLanguage] = useState("");

	useEffect(() => {
		const highlightedCode = hljs.highlightAuto(children);
		setCode(highlightedCode.value);
		setLanguage(highlightedCode.language);
	}, [children]);

	return (
		<pre>
			<code
				className={`hljs ${language ? `language-${language}` : ""}`}
				dangerouslySetInnerHTML={{ __html: code }}
			></code>
		</pre>
	);
};

export { CodeHL };
