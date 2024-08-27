import React from "react"

export default function TestimonialWithLogo({ children, logo, altText }) {
    return(
        <div className="testimonial">
            <img className="testimonial-logo" src={`/public/${logo}.png`} alt={altText} />
            <div>
                {children}
            </div>
        </div>
    )
}