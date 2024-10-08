import React from "react"
import TestimonialWithImg from "../components/TestimonialWithImg/index"

export default function TestimonialWithImage() {
    return(
        <section id="testimonial">
            <h2>Testimonial with image</h2>
            <a className="back-to-top" href="#header">Back to top</a>
            <div className="testimonial-with-img-container">
                <TestimonialWithImg imgSrc="mayAndersons" altText="May Andersons.">
                    <TestimonialWithImg.Quote>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed urna nulla vitae laoreet augue. Amet feugiat est integer dolor auctor adipiscing nunc urna, sit. 
                    </TestimonialWithImg.Quote>
                    <TestimonialWithImg.Author author="May Andersons" role="Workcation, CTO" />
                </TestimonialWithImg>
            </div>
            <h3>Syntax</h3>
            <div className="syntax">
                <p><code>{`import TestimonialWithImg from "./components/TestimonialWithImg/index"`}</code></p>
                <p><code>{`<TestimonialWithImg imgSrc="mayAndersons" altText="May Andersons.">`}</code></p>
                <p><code>{`<TestimonialWithImg.Quote>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed urna nulla vitae laoreet augue. Amet feugiat est integer dolor auctor adipiscing nunc urna, sit. 
                </TestimonialWithImg.Quote>`}</code></p>
                <p><code>{`<TestimonialWithImg.Author author="May Andersons" role="Workcation, CTO" />`}</code></p>
                <p><code>{`</TestimonialWithImg>`}</code></p>
            </div>
        </section>
    )
}