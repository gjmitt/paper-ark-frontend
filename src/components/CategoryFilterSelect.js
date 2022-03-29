import React from 'react'

function CategoryFilterSelect() {

  function handleCategorySelect(e) {
    console.log("Category selected", e.target.value)
  }

  return (
    <select onChange={handleCategorySelect}>
      <option>Hardware</option>
      <option>Software</option>
    </select>
  )
}

export default CategoryFilterSelect