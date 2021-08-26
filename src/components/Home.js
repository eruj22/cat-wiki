import { useState, useEffect } from "react"
import logo from "../assets/CatwikiLogo-light.svg"
import { FiSearch } from "react-icons/fi"
import { BsArrowRight } from "react-icons/bs"
import Footer from "./Footer"
import image1 from "../assets/image1.png"
import { getRandomInt } from "../utils/helpers"
import { Link } from "react-router-dom"
import TextField from "@material-ui/core/TextField"
import Autocomplete from "@material-ui/lab/Autocomplete"
import { useHistory } from "react-router-dom"

function Home({ appData }) {
  const [randomData, setRandomData] = useState([])
  const [searchQuery, setSearchQuery] = useState("")

  const history = useHistory()

  useEffect(() => {
    setRandomData([])
    for (let i = 0; i < 4; i++) {
      const number = getRandomInt(67)
      const getCat = appData[number]
      setRandomData((blah) => [...blah, getCat])
    }
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()

    const getName = appData.find((item) => item.name === searchQuery.trim())
    const getId = getName.id
    if (true) history.push(`/${getId}`)
  }

  const onChange = (e) => {
    const input = e.target.value
    setSearchQuery(input)
  }

  return (
    <>
      <section className="hero wrapper">
        <div className="container">
          <div className="hero__text">
            <img src={logo} alt="" />
            <p>Get to know more about your cat breed</p>
            <form className="hero__text--form" onSubmit={handleSubmit}>
              <Autocomplete
                options={appData}
                getOptionLabel={(option) => option.name}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label="Enter your breed"
                    variant="outlined"
                    onChange={onChange}
                  />
                )}
              />
              <button className="search">
                <FiSearch />
              </button>
            </form>
          </div>
        </div>
      </section>
      <section className="popular wrapper">
        <div className="container">
          <div className="popular__text">
            <p>Most searched Breeds</p>
            <div className="popular__text--grid">
              <h2>66+ Breeds For You To Discover</h2>
              <Link to="/cats" className="link">
                See more
                <BsArrowRight />
              </Link>
              {randomData.map(({ name, image: { url } }, index) => (
                <div key={index}>
                  <img src={url} alt={name} />
                  <p>{name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <main className="main wrapper">
        <div className="container flex">
          <div className="main__text">
            <h1>Why should you have a cat?</h1>
            <p>
              Having a cat around you can actually trigger the release of
              calming chemicals in your body which lower your stress and anxiety
              levels
            </p>
            <Link to="/cats" className="link">
              Read more
              <BsArrowRight />
            </Link>
          </div>
          <aside className="main__images">
            <img src={image1} alt="" />
          </aside>
        </div>
      </main>
      <Footer />
    </>
  )
}

export default Home
