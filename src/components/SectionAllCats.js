import React, { useState } from "react"
import Footer from "./Footer"
import { LazyLoadImage } from "react-lazy-load-image-component"
import { useHistory } from "react-router-dom"
import error from "../assets/error.jpg"
import Pagination from "@material-ui/lab/Pagination"
import paginate from "../utils/paginate"

function SectionAllCats({ appData }) {
  let history = useHistory()
  const [page, setPage] = useState(0)
  const appDataShort = paginate(appData)[page]
  window.scrollTo({ top: 0, behavior: "smooth" })

  const showCat = (e) => {
    const catName = e.target.alt
    const getName = appData.find((item) => item.name === catName)
    const getId = getName.id
    if (true) history.push(`/${getId}`)
  }

  const handlePage = (e, index) => {
    setPage(index)
  }

  const showImg = (id) => {
    let blah = `https://cdn2.thecatapi.com/images/${id}.jpg`
    if (id === "O3btzLlsO" || id === "4RzEwvyzz" || id === "DbwiefiaY") {
      blah = `https://cdn2.thecatapi.com/images/${id}.png`
    } else if (id === undefined) {
      blah = error
    }
    return blah
  }

  return (
    <>
      <section className="allCats">
        <div className="wrapper">
          <h2 className="allCats__title">Top 10 most searched breeds</h2>
          {appDataShort.map(
            ({ name, description, reference_image_id }, index) => (
              <div onClick={showCat} className="allCats__item" key={index}>
                <LazyLoadImage
                  className="allCats__image"
                  src={showImg(reference_image_id)}
                  alt={name}
                  width={300}
                  height={300}
                />
                <div className="item__text">
                  <h3>{name}</h3>
                  <p>{description}</p>
                </div>
              </div>
            )
          )}
          <Pagination
            className="allCats__pagination"
            count={6}
            page={page}
            onChange={handlePage}
          />
        </div>
      </section>
      <Footer />
    </>
  )
}

export default SectionAllCats
