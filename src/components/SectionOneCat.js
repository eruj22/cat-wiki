import React, { useState, useEffect } from "react"
import Footer from "./Footer"
import Rating from "@material-ui/lab/Rating"
import { FaSquare } from "react-icons/fa"
import axios from "axios"
import Loader from "../utils/Loader"

function SectionOneCat({ match }) {
  const [data, setData] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  const apiKey = "ad1553f0-4bb7-4bb2-8dbd-ceb8064c38e8"

  const fetchData = () => {
    const apiUrl = `https://api.thecatapi.com/v1/images/search?breed_ids=${match.params.id}`
    const config = {
      method: "get",
      headers: { "x-api-key": apiKey },
    }
    axios
      .get(apiUrl, config)
      .then((resp) => {
        setData(resp.data[0])
        setIsLoading(false)
      })
      .catch((err) => console.log(err))
  }

  useEffect(() => {
    fetchData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  if (isLoading) {
    return <Loader />
  }

  const { url } = data

  const {
    adaptability,
    affection_level,
    child_friendly,
    grooming,
    intelligence,
    health_issues,
    social_needs,
    stranger_friendly,
    name,
    origin,
    life_span,
    temperament,
    description,
  } = data.breeds[0]

  return (
    <>
      <section className="oneCat wrapper">
        <div className="oneCat__info">
          <img className="oneCat__image" src={url} alt="" />
          <div className="info__text">
            <h3>{name}</h3>
            <p>{description}</p>
            <p>
              <b>Temperament: </b>
              {temperament}
            </p>
            <p>
              <b>Origin: </b>
              {origin}
            </p>
            <p>
              <b>Life span: </b>
              {life_span} years
            </p>
            <div className="rating">
              <b>Adaptability: </b>
              <Rating
                name="read-only"
                value={adaptability}
                icon={<FaSquare fontSize="inherit" />}
                size="large"
                readOnly
              />
            </div>
            <div className="rating">
              <b>Affection level: </b>
              <Rating
                name="read-only"
                value={affection_level}
                icon={<FaSquare fontSize="inherit" />}
                size="large"
                readOnly
              />
            </div>
            <div className="rating">
              <b>Child Friendly: </b>
              <Rating
                name="read-only"
                value={child_friendly}
                icon={<FaSquare fontSize="inherit" />}
                size="large"
                readOnly
              />
            </div>
            <div className="rating">
              <b>Grooming: </b>
              <Rating
                name="read-only"
                value={grooming}
                icon={<FaSquare fontSize="inherit" />}
                size="large"
                readOnly
              />
            </div>
            <div className="rating">
              <b>Intelligence: </b>
              <Rating
                name="read-only"
                value={intelligence}
                icon={<FaSquare fontSize="inherit" />}
                size="large"
                readOnly
              />
            </div>
            <div className="rating">
              <b>Health issues: </b>
              <Rating
                name="read-only"
                value={health_issues}
                icon={<FaSquare fontSize="inherit" />}
                size="large"
                readOnly
              />
            </div>
            <div className="rating">
              <b>Social needs: </b>
              <Rating
                name="read-only"
                value={social_needs}
                icon={<FaSquare fontSize="inherit" />}
                size="large"
                readOnly
              />
            </div>
            <div className="rating">
              <b>Stranger friendly: </b>
              <Rating
                name="read-only"
                value={stranger_friendly}
                icon={<FaSquare fontSize="inherit" />}
                size="large"
                readOnly
              />
            </div>
            <div className="rating">
              <small className="rating__small">Legend:</small>
              <small className="rating__small">
                one <FaSquare className="icon" /> means rating 1 out of 5
              </small>
            </div>
          </div>
        </div>
        {/* <div className="oneCat__gallery">
          <h3>Other photos</h3>
        </div> */}
      </section>
      <Footer />
    </>
  )
}

export default SectionOneCat
