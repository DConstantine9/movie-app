import React from "react";
import MySelect from "../components/MySelect";
import "../styles/MovieFilter.css"

const MovieFIlter = ({filter, setFilter}) => {

  return (
    <div className="movie__filter">
      <input
        value={filter.query}
        onChange={(e) => setFilter({...filter, query: e.target.value})}
        placeholder="Поиск..." 
      />
      <MySelect 
        value={filter.sort}
        onChange={selectedSort => setFilter({filter, sort: selectedSort})}
        defaultValue="Сортировка"
        options={[
          {value: "title", name: "По названию"},
          {value: "summary", name: "По описанию"}
        ]}
      />  
    </div>
  )
}

export default MovieFIlter