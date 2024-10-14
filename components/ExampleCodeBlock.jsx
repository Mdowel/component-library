import React from "react"
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"
import { duotoneSea, tomorrow } from "react-syntax-highlighter/dist/esm/styles/prism"

export default function ExampleCodeBlock({ children, language }) {
    return (
        <div className="code-block-container">
            <SyntaxHighlighter language={language} style={duotoneSea}>
                {children}
            </SyntaxHighlighter>
        </div>
    )
}

//add a comment