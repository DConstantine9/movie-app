import React from "react";
import axios from "axios";
import Movie from "../components/Movie";
import "../styles//Home.css";

function App() {

  const [isLoading, setIsLoading] = React.useState(true)
  const [movies, setMovies] = React.useState([])

  async function fetchData() {
    const {
      data:
        {data: {movies}
      }
    } = await axios.get("https://yts.mx/api/v2/list_movies.json?sort_by=raiting")
    setIsLoading(false)
    setMovies(movies)
  }
    
  React.useEffect(() => {
    fetchData()
  }, [])


  return (
    <section className="container">
      {isLoading ? (
        <div className="loader">
          <span className="loder__text">Загрузка...</span>
        </div>
        ) : (
        <div className="movies">
          {movies.map(movie => {
            return (
              <Movie 
                key={movie.id}
                id={movie.id} 
                year={movie.year} 
                title={movie.title} 
                summary={movie.summary} 
                poster={movie.medium_cover_image} 
                genres={movie.genres}
              />
            )
          })}
          </div>
        )
      }
    </section>
  )
}

export default App;
