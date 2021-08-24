import { useState } from "react"
import "./style/main.scss"
import Home from "./components/Home"
import SectionAllCats from "./components/SectionAllCats"
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"
import logo from "./assets/CatwikiLogo.svg"
import { GiHamburgerMenu } from "react-icons/gi"
import { CgClose } from "react-icons/cg"

const apiKey = "ad1553f0-4bb7-4bb2-8dbd-ceb8064c38e8"

function App() {
  const [showMenu, setShowMenu] = useState(false)

  return (
    <Router>
      <section className="header wrapper">
        <Link to="/" className="header__logo">
          <img src={logo} alt="CatWiki logo" />
        </Link>
        <nav className={showMenu ? "nav nav--open" : "nav"}>
          <ul className="nav__menu">
            <li className="nav__item">
              <Link
                className="nav__link"
                onClick={() => setShowMenu(false)}
                to="/"
              >
                Home
              </Link>
            </li>
            <li className="nav__item">
              <Link
                className="nav__link"
                onClick={() => setShowMenu(false)}
                to="/cats"
              >
                All Cats
              </Link>
            </li>
          </ul>
          <button className="nav--close" onClick={() => setShowMenu(false)}>
            <CgClose />
          </button>
        </nav>
        <button className="header__hamburger" onClick={() => setShowMenu(true)}>
          <GiHamburgerMenu />
        </button>
      </section>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/cats">
          <SectionAllCats />
        </Route>
      </Switch>
    </Router>
  )
}

export default App
