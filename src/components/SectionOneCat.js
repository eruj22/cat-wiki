import React from "react"
import Footer from "./Footer"
import image2 from "../assets/image2.png"

function SectionOneCat() {
  const value = 3
  return (
    <>
      <section className="oneCat wrapper">
        <div className="oneCat__info">
          <img src={image2} alt="" />
          <div className="info__text">
            <h3>Bengal</h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Cupiditate assumenda quibusdam inventore, error dolorem odio
              similique enim a dolores tempore, ullam quis facilis sint
              laboriosam, doloremque quasi consequuntur dignissimos veritatis?
            </p>
            <p>Temperament</p>
            <p>Origin</p>
            <p>Life span</p>
            <div className="rating">
              <p>Adaptability: </p>
              <div className="rating__item"></div>
              <div className="rating__item"></div>
              <div className="rating__item"></div>
              <div className="rating__item"></div>
              <div className="rating__item"></div>
            </div>
          </div>
        </div>
        <div className="oneCat__gallery">
          <h3>Other photos</h3>
        </div>
      </section>
      <Footer />
    </>
  )
}

export default SectionOneCat
