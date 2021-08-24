import React from "react"
import logo from "../assets/CatwikiLogo-light.svg"
import { FiSearch } from "react-icons/fi"
import { BsArrowRight } from "react-icons/bs"
import Footer from "./Footer"
import image1 from "../assets/image1.png"
import image2 from "../assets/image2.png"
import image3 from "../assets/image3.png"

function Home() {
  return (
    <>
      <section className="hero wrapper">
        <div className="container">
          <div className="hero__text">
            <img src={logo} alt="" />
            <p>Get to know more about your cat breed</p>
            <div className="hero__text--input">
              <input type="text" placeholder="Enter your breed" />
              <button>
                <FiSearch />
              </button>
            </div>
          </div>
        </div>
      </section>
      <section className="popular wrapper">
        <div className="container">
          <div className="popular__text">
            <p>Most searched Breeds</p>
            <div className="popular__text--grid">
              <h2>66+ Breeds For You To Discover</h2>
              <button>
                See more
                <BsArrowRight />
              </button>
              {/* add images */}
              <div>1</div>
              <div>2</div>
              <div>3</div>
              <div>4</div>
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
            <button>
              Read more
              <BsArrowRight />
            </button>
          </div>
          <aside className="main__images">
            {/* <img src={image2} alt="" /> */}
            <img src={image1} alt="" />
            {/* <img src={image3} alt="" /> */}
          </aside>
        </div>
      </main>
      <Footer />
    </>
  )
}

export default Home
