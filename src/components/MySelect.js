import React from "react";
import "../styles//MySelect.css"

const MySelect = ({options, defaultValue, value, onChange}) => {
  console.log(options)
  return (
    <select 
      className="mySelect"
      value={value}
      onChange={e => onChange(e.target.value)}
    >
      <option disabled value="">{defaultValue}</option>
      {options.map(option => {
        return (
        <option key={option.value} value={option.value}>
          {option.name}
        </option>)
      })}
    </select>
  )
}

export default MySelect;