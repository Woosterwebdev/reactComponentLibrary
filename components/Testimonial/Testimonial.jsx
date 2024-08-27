import React from "react"

export default function TestimonialWithLogo({ children, logo }) {
    return(
        <div className="testimonial">
            <img className="testimonial-logo" src={`/public/${logo}.png`} />
            <div>
                {children}
            </div>
        </div>
    )
}