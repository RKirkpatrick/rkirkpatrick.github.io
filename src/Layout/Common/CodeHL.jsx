// import SyntaxHighlighter from "react-syntax-highlighter/dist/cjs/default-highlight";
// import DefaultCSS from "highlight.js/styles/default.css";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { tomorrow } from "react-syntax-highlighter/dist/cjs/styles/prism";

const CodeBlock = ({ language, children, ...props }) => {
	return (
		<SyntaxHighlighter
			language={language}
			style={tomorrow}
			wrapLongLines={true}
			showLineNumbers={true}
			children={String(children).replace(/\n$/, "")}
			{...props}
		/>
	);
};

const CodeMarkdown = {
	code({ node, inline, className, children, ...props }) {
		const match = /language-(\w+)/.exec(className || "");
		return !inline && match ? (
			<CodeBlock language={match[1]} showLineNumbers={false}>
				{children}
			</CodeBlock>
		) : (
			<code className={className} {...props}>
				{children}
			</code>
		);
	},
};

export { CodeMarkdown, CodeBlock };
