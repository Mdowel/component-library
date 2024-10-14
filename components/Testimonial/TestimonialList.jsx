import React from "react";
import ExampleCodeBlock from "../ExampleCodeBlock";

export default function TestimonialList({children, showCode = false}) {
    const codeString = `
    <TestimonialWithPic 
          orientation="horizontal" 
          backgroundColor="#2545B8" 
          textColor="#FFFFFF" 
          boxShadow="0 0 10px rgb(49, 22, 173)"
          imageSrc={imageSrc}
          imageAltText="altText">
        <TestimonialWithPic.Quote>Quote</TestimonialWithPic.Quote>
        <TestimonialWithPic.Footer authorName="Author" authorTitle="Title" companyName="Company"></TestimonialWithPic.Footer>
    </TestimonialWithPic>

    <TestimonialNoPic 
        orientation="vertical" 
        backgroundColor="#F3F4F6"
        textColor="#1F2937">
        <TestimonialNoPic.Header logo={iconSrc} companyName=""></TestimonialNoPic.Header>
        <TestimonialNoPic.Quote>Quote</TestimonialNoPic.Quote>
        <TestimonialNoPic.Footer authorName="Author" authorTitle="Title" companyName="Company"></TestimonialNoPic.Footer>
    </TestimonialNoPic>
    `

    return (
        <>
            <div className="testimonial-list">{children}</div>
            {showCode && (
                <ExampleCodeBlock language="jsx">
                    {codeString} 
                </ExampleCodeBlock>
            )}
        </>
    )
}