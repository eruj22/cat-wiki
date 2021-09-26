import { useState, useEffect } from "react"
import "./style/main.scss"
import Home from "./components/Home"
import SectionAllCats from "./components/SectionAllCats"
import Article from "./components/Article"
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"
import logo from "./assets/CatwikiLogo.svg"
import { GiHamburgerMenu } from "react-icons/gi"
import { CgClose } from "react-icons/cg"
import axios from "axios"
import SectionOneCat from "./components/SectionOneCat"
import Loader from "./utils/Loader"

function App() {
  const [showMenu, setShowMenu] = useState(false)
  const [appData, setAppData] = useState([])
  const [loading, setLoading] = useState(true)

  const apiKey = process.env.API_KEY

  const fetchData = () => {
    const apiUrl = `https://api.thecatapi.com/v1/breeds`
    const config = {
      method: "get",
      headers: { "x-api-key": apiKey },
    }
    axios
      .get(apiUrl, config)
      .then((resp) => {
        setAppData(resp.data)
        setLoading(false)
      })
      .catch((err) => console.log(err))
  }

  useEffect(() => {
    fetchData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  if (loading) {
    return <Loader />
  }

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
          <Home appData={appData} />
        </Route>
        <Route path="/cats">
          <SectionAllCats appData={appData} />
        </Route>
        <Route path="/article">
          <Article />
        </Route>
        <Route path="/:id" component={SectionOneCat} />
      </Switch>
    </Router>
  )
}

export default App
