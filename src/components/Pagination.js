import React from 'react'
import "../styles/Pagination.css"

function Pagination({moviesPerPage, totalMovies, currentPage, paginate}) {
  const pageNumbers = []

  for (let i = 1; i <=Math.ceil(totalMovies / moviesPerPage); i++) {
    pageNumbers.push(i)
  }

  return (
    <div>
      <nav>
        <ul className='pagination'>
          {pageNumbers.map(p => (
            <li key={p} className='page__item'>
              <button 
                onClick={() => paginate(p)} 
                /* href='#' */ 
                className={
                  currentPage === p 
                  ? 'page__active' : 'page__link'
                } 
              >
                {p}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  )
}

export default Pagination