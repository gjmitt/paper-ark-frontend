import React from 'react'

function CategoryFilterSelect({ category, onCategoryChange, categoryOptions }) {

  return (
    <label>Category:
      <select value={category} onChange={(e) => onCategoryChange(e.target.value)}>
        {categoryOptions.map((item) => 
          <option key={item} value={item}>{item}</option>
        )}
      </select>
    </label>
  )
}

export default CategoryFilterSelect


