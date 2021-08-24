import React from "react"
import logo from "../assets/CatwikiLogo-light.svg"

function Footer() {
  return (
    <footer className="footer wrapper">
      <div className="container">
        <div className="footer__text">
          <img src={logo} alt="" />
          <p>Created by Jure</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
