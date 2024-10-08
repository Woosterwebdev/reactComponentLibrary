import React from "react"
import Testimonial from "../components/Testimonial/index"

export default function TestimonialWithLogo() {
    return(
        <section id="testimonial-logo">
            <h2>Testimonial with logo</h2>
            <a className="back-to-top" href="#header">Back to top</a>
            <div>
                <Testimonial logo="logo" altText="Company Logo.">
                    <Testimonial.Quote>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed urna nulla vitae laoreet augue. Amet feugiat est integer dolor auctor adipiscing nunc urna, sit. 
                    </Testimonial.Quote>
                    <Testimonial.Author author="May Andersons" role="Workcation, CTO" />
                </Testimonial>
            </div>
            <h3>Syntax</h3>
            <div className="syntax">
                <p><code>{`import Testimonial from "./components/Testimonial/index"`}</code></p>
                <p><code>{`<Testimonial logo="logo" altText="Company Logo.">`}</code></p>
                <p><code>{`<Testimonial.Quote>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed urna nulla vitae laoreet augue. Amet feugiat est integer dolor auctor adipiscing nunc urna, sit. 
                    </Testimonial.Quote>`}</code></p>
                <p><code>{`<Testimonial.Author author="May Andersons" role="Workcation, CTO" />`}</code></p>
                <p><code>{`</Testimonial>`}</code></p>
            </div>
        </section>
    )
}