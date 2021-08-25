import { useState, useEffect } from "react"
import "./style/main.scss"
import Home from "./components/Home"
import SectionAllCats from "./components/SectionAllCats"
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"
import logo from "./assets/CatwikiLogo.svg"
import { GiHamburgerMenu } from "react-icons/gi"
import { CgClose } from "react-icons/cg"
import axios from "axios"
import SectionOneCat from "./components/SectionOneCat"

function App() {
  const [showMenu, setShowMenu] = useState(false)
  const [appData, setAppData] = useState([])

  const apiKey = "ad1553f0-4bb7-4bb2-8dbd-ceb8064c38e8"

  useEffect(() => {
    const apiUrl = `https://api.thecatapi.com/v1/breeds`
    const config = {
      method: "get",
      headers: { "x-api-key": apiKey },
    }
    axios.get(apiUrl, config).then((repos) => {
      const allRepos = repos.data
      setAppData(allRepos)
    })
  }, [setAppData])

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
            <li className="nav__item">
              <Link
                className="nav__link"
                onClick={() => setShowMenu(false)}
                to="/cat"
              >
                Cat
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
          <Home appData={appData} />
        </Route>
        <Route path="/cats">
          <SectionAllCats appData={appData} />
        </Route>
        <Route path="/cat">
          <SectionOneCat />
        </Route>
      </Switch>
    </Router>
  )
}

export default App
