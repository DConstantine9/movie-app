import React from "react";
import axios from "axios";
import Movie from "../components/Movie";
import Pagianation from "../components/Pagination"
import "../styles//Home.css";

const Home = () => {
  
  const [isLoading, setIsLoading] = React.useState(true)
  const [movies, setMovies] = React.useState([])
  const [currentPage, setCurrentPage] = React.useState(1);
  const [moviesPerPage] = React.useState(10);

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

  const indexOfLastMovie = currentPage * moviesPerPage;
  const indexOfFirstMovie = indexOfLastMovie - moviesPerPage;
  const currentMovies = movies.slice(indexOfFirstMovie, indexOfLastMovie);

  const paginate = pageNumber => setCurrentPage(pageNumber);


  return (
    <section className="container">
      {isLoading ? (
        <div className="loader">
          <span className="loder__text">Загрузка...</span>
        </div>
        ) : (
        <div className="movies">
          {currentMovies.map(movie => {
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
      <Pagianation 
        moviesPerPage={moviesPerPage}
        totalMovies={movies.length}
        paginate={paginate}
        currentPage={currentPage}
      />
    </section>
  )
}

export default Home;
