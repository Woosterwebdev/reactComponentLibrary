import React from "react"

export default function CardIcon({ cardIcon, altText }) {
    return(
        <header className="card-icon-container">
                <img className="card-icon" src={`/${cardIcon}.png`} alt={altText}/>
        </header>
    )
}