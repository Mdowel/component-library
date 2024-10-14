import React from "react"
import ExampleCodeBlock from "../ExampleCodeBlock"

export default function BannerList({ children }) {
    const codeString = `
    <Banner variant="success">
        <Banner.Heading>Heading</Banner.Heading>
        <Banner.Text>Text</Banner.Text>
    </Banner>  
    `

    return (
        <>
            <div className="banner-list">{children}</div>
            <ExampleCodeBlock language="jsx">
                {codeString}
            </ExampleCodeBlock>
        </>
    )
}