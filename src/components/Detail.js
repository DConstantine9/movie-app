import React from "react";
import "../styles/Detail.css";

function Detail(props) {

  let locationState = props.location.state

  React.useEffect(() => {
    if (locationState === undefined) {
      props.history.push('/')
    }
  })

 
  if (locationState) {
      return (
        <div className="detail__block">
          <div className="detail__poster"> 
            <img src={locationState.poster} alt={locationState.title} title={locationState.title} />
          </div>
          <div className="detail__info">
            <h1 className="detail__title">{locationState.title}</h1>
            <h4 className="detail__year">{locationState.year}</h4>
            <ul className="detail__genres">
              {locationState.genres.map((genre, i) => {
                return (
                  <li key={i} className="detail__genres__genre">
                    {genre}
                  </li>
                )
              })}
            </ul>
            <p className="movie__summary">{locationState.summary}</p>
          </div>
        </div>
      )
  } else {
    return null
  }
}

export default Detail