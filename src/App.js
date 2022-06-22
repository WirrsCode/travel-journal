import React from "react"
import Navbar from "./components/Navbar"
import Card from "./components/Card"
import data from "./data.js"

export default function App () {
    const cards = data.map(item => 
        <Card
            key = {item.id}
            {...item}
        />
    )

    return  (
        <div>
            <Navbar />
            <br />
            <div className="content-area">
                {cards}
            </div>
        </div>
    )
}