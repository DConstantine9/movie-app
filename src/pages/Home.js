import React from "react";
import axios from "axios";
import Movie from "../components/Movie";
import Pagianation from "../components/Pagination"
import MovieFIlter from "../components/MovieFilter";
import "../styles//Home.css";

const Home = () => {
  
  const [isLoading, setIsLoading] = React.useState(true)
  const [movies, setMovies] = React.useState([])
  const [currentPage, setCurrentPage] = React.useState(1);
  const [moviesPerPage] = React.useState(10);
  const [filter, setFilter] = React.useState({sort: "", query: ""})

  async function fetchData() {
    const {
      data:
        {data: {movies}
      }
    } = await axios.get("https://yts.mx/api/v2/list_movies.json?limit=50&pages=10")
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

  const sortedMovies = React.useMemo(() => {
    if (filter.sort) {
      return [...currentMovies].sort((a, b) => a[filter.sort].localeCompare(b[filter.sort]))
    }
    else {
      return currentMovies
    }
  }, [filter.sort, currentMovies])
  

  const sortedAndSearchedMovies = React.useMemo(() => {
    return sortedMovies.filter(movie => movie.title.toLowerCase().includes(filter.query))
  }, [filter.query, sortedMovies])

  async function pagination(page, limit = 5) {
    return await axios.get("https://yts.mx/api/v2/list_movies.json?limit=50",
      {params: {page, limit}}
    )
    .then (res => data.res)
  }


  return (
    <section className="container">
      {isLoading ? (
        <div className="loader">
          <span className="loder__text">Загрузка...</span>
        </div>
        ) : (
          <div className="home__body">
            <MovieFIlter 
              filter={filter} 
              setFilter={setFilter}
            />
            <div className="movies">
              {sortedAndSearchedMovies.map(movie => {
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
