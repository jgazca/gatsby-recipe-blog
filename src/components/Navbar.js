import React, { useState } from "react"
import { Link } from "gatsby"
import { RiMenuFill } from "react-icons/ri"
import logo from "../assets/images/logo.png"

const Navbar = () => {
  const [show, setShow] = useState(false)
  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <Link to="/">
            <img src={logo} alt="everyday recipes" />
          </Link>
          <button className="nav-btn" onClick={() => setShow(!show)}>
            <RiMenuFill />
          </button>
        </div>
        <div className={show ? "nav-links show-links" : "nav-links"}>
          <Link
            to="/"
            className="nav-link"
            activeClassName="active-link"
            onClick={() => setShow(false)}
          >
            home
          </Link>
          <Link
            to="/recipes"
            className="nav-link"
            activeClassName="active-link"
            onClick={() => setShow(false)}
          >
            recipes
          </Link>
          <Link
            to="/tags"
            className="nav-link"
            activeClassName="active-link"
            onClick={() => setShow(false)}
          >
            tags
          </Link>

          <Link
            to="/about"
            className="nav-link"
            activeClassName="active-link"
            onClick={() => setShow(false)}
          >
            about
          </Link>
          <div className="nav-link contact-link">
            <Link to="/contact" className="btn" onClick={() => setShow(false)}>
              contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar

{
  /* <RiMenuFill /> */
}
