import React from "react"
import Footer from "./Footer"

function SectionAllCats({ appData }) {
  return (
    <>
      <section className="allCats">
        <div className="wrapper">
          <h2>Top 10 most searched breeds</h2>
          {appData.map(({ name, description, reference_image_id }) => (
            <div className="allCats__item">
              <img
                src={`https://cdn2.thecatapi.com/images/${reference_image_id}.png`}
                alt={name}
              />
              <div className="item__text">
                <h3>{name}</h3>
                <p>{description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </>
  )
}

export default SectionAllCats
