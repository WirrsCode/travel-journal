import React from "react"
import pinImg from "../images/Fill 219.png"

export default function Card(props) {
    let date
    if (props.endDate) {
        date = props.startDate + " - " + props.endDate
    } 
    else {
        date = props.startDate
    }

    return (
        <div className="card">
            <span className="card-section">
                <img src={props.imageUrl} alt={props.imageUrl} className="card--img" />
                <span className="card--content">
                    <span className="card--country">
                        <img src={pinImg} alt="pin icon" className="card--pin"/>
                        <span className="card--country-name">{props.location.toUpperCase()}</span>
                        <a href={props.googleMapsUrl} target="_blank" rel="noreferrer">
                            View on Google Maps
                        </a>
                    </span>
                    <h1>{props.title}</h1>
                    <h2>{date}</h2>
                    <p>{props.description}</p>
                    <div class="tooltip">Read more...
                        <span class="tooltiptext">Jk, I didn't write anything else</span>
                    </div>
                </span>
            </span>
            <hr />
        </div>
    )
}