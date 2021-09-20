import React from "react";
import axios from "axios";
import Movie from "../components/Movie";
import Pagianation from "../components/Pagination"
import "../styles//Home.css";
import MovieFIlter from "../components/MovieFilter";

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
    } = await axios.get("https://yts.mx/api/v2/list_movies.json?limit=50")
    setIsLoading(false)
    setMovies(movies)
    console.log(movies)
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
