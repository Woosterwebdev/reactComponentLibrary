import React from "react"

export default function TestimonialWithImg({ children, imgSrc, altText }) {
    return(
        <div className="testimonial-with-img">
            <img className="testimonial-image" src={`/public/${imgSrc}.png`} alt={altText} />
            <div className="quote-with-img-author">
                {children}
            </div>
        </div>
    )
}