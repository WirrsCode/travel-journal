import React from "react"
import logo from "../images/Fill 213.png"

export default function Navbar () {
    return (
        <nav className="navbar">
            <img src={logo} className="navbar--logo" alt="logo" />
            <span className="navbar--title">ignacio's travels.</span>
        </nav>
    )
}